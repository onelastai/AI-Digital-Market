import { MongoClient } from 'mongodb';
import bcrypt from 'bcryptjs';

const client = new MongoClient(process.env.MONGODB_URI);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  if (password.length < 6) {
    return res.status(400).json({ error: 'Password must be at least 6 characters' });
  }

  try {
    await client.connect();
    const db = client.db('ai-digital-market');
    const users = db.collection('users');

    // Check if user already exists
    const existingUser = await users.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists with this email' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user
    const newUser = {
      name,
      email,
      password: hashedPassword,
      role: 'user',
      plan: 'free',
      usage: {
        requests: 0,
        tokens: 0,
        cost: 0,
        lastReset: new Date()
      },
      createdAt: new Date(),
      lastLogin: new Date()
    };

    const result = await users.insertOne(newUser);

    res.status(201).json({
      success: true,
      message: 'User created successfully',
      userId: result.insertedId
    });

  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    await client.close();
  }
}
