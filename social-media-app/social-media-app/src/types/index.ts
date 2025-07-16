export interface User {
    id: string;
    name: string;
    bio: string;
}

export interface Post {
    id: string;
    userId: string;
    title: string;
    content: string;
}

