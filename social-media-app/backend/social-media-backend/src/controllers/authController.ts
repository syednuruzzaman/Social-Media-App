import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user';
import { SafeUser } from '../types';
import fs from 'fs';
import path from 'path';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret'; // Use env variable in production

const logFilePath = path.join(__dirname, '../../error.log');
function logToFile(message: string) {
    const timestamp = new Date().toISOString();
    fs.appendFileSync(logFilePath, `[${timestamp}] ${message}\n`);
}

class AuthController {
    async register(req: Request, res: Response) {
        const { email, password } = req.body;

        try {
            const existingUser = await User.findByEmail(email);
            if (existingUser) {
                return res.status(400).json({ message: 'User already exists' });
            }

            // Hash password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const newUser = await User.create({ email, password: hashedPassword });
            // Exclude password from response and type as SafeUser
            const userResponse: SafeUser = {
                id: String(newUser._id),
                email: newUser.email,
                createdAt: newUser.createdAt,
                updatedAt: newUser.updatedAt,
            };
            return res.status(201).json({ message: 'User registered successfully', user: userResponse });
        } catch (error) {
            console.error('Registration error:', error);
            return res.status(500).json({ message: 'Server error' });
        }
    }

    async login(req: Request, res: Response) {
        console.log('Login endpoint hit');
        const { email, password } = req.body;

        try {
            const user = await User.findByEmail(email);
            if (!user) {
                const msg = `User not found for email: ${email}`;
                console.error(msg);
                logToFile(msg);
                return res.status(401).json({ message: 'Invalid credentials' });
            }
            const isMatch = await user.comparePassword(password);
            if (!isMatch) {
                const msg = `Password mismatch for user: ${email}`;
                console.error(msg);
                logToFile(msg);
                return res.status(401).json({ message: 'Invalid credentials' });
            }

            // Generate a JWT token
            const token = this.generateToken(String(user._id), user.email);
            return res.status(200).json({ message: 'Login successful', token });
        } catch (error) {
            const msg = `Login error: ${error instanceof Error ? error.stack || error.message : String(error)}`;
            console.error(msg);
            logToFile(msg);
            return res.status(500).json({ message: 'Server error' });
        }
    }

    private generateToken(userId: string, email: string) {
        return jwt.sign({ userId, email }, JWT_SECRET, { expiresIn: '1h' });
    }
}

export default AuthController;