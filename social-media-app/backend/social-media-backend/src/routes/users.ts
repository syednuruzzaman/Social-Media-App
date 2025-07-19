import { Router, Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/user';

const router = Router();

// @route   POST /api/users
// @desc    Register a new user
router.post('/', async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    // Check for existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const user = new User({ email, password: hashedPassword });
    await user.save();

    // Return user info without password
    const userResponse = {
      id: user._id,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
    res.status(201).json(userResponse);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

export default router; 