// This file contains TypeScript interfaces and types used throughout the application.

export interface User {
    id: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

// SafeUser omits the password field for API responses
export type SafeUser = Omit<User, 'password'>;

export interface AuthRequest {
    email: string;
    password: string;
}

export interface AuthResponse {
    token: string;
    user: SafeUser;
}