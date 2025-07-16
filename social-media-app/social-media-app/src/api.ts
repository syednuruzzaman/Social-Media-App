import { User, Post } from './types';

export async function getUserProfile(userId: string): Promise<User> {
    // mock implementation
    return { id: userId, name: 'Test User', bio: 'Test bio' };
}

export async function getUserPosts(userId: string): Promise<Post[]> {
    // mock implementation
    return [
        { id: '1', userId, title: 'Hello', content: 'World' }
    ];
}
