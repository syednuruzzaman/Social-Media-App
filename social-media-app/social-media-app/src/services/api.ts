export async function fetchPosts() {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 300));
    // Return mock posts
    return [
        {
            id: 1,
            title: 'Jane Doe',
            content: 'Hello, this is my first post!',
        },
        {
            id: 2,
            title: 'John Smith',
            content: 'Welcome to the social media app!',
        },
    ];
}

export async function loginUser(email: string, password: string) {
    // Replace with real API call
    if (email === 'test@example.com' && password === 'password') {
        return { success: true, token: 'mock-token', user: { id: '1', name: 'Test User' } };
    }
    return { success: false, message: 'Invalid credentials' };
}

export async function registerUser(name: string, email: string, password: string) {
    // Replace with real API call
    return { success: true, user: { id: '2', name, email } };
}