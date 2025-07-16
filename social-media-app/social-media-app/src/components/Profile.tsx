import React, { useEffect, useState } from 'react';

import { User, Post } from '../types';
import { getUserProfile, getUserPosts } from '../api';

interface ProfileProps {
    userId: string;
}

const Profile: React.FC<ProfileProps> = ({ userId }) => {
    const [user, setUser] = useState<User | null>(null);
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const [userProfile, userPosts] = await Promise.all([
                    getUserProfile(userId),
                    getUserPosts(userId)
                ]);
                setUser(userProfile);
                setPosts(userPosts);
            } catch (err) {
                setError('Failed to load profile or posts.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [userId]);

    const handleEditProfile = () => {
        // Logic for editing profile information
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            {user && (
                <div>
                    <h1>{user.name}</h1>
                    <p>{user.bio}</p>
                    <button onClick={handleEditProfile}>Edit Profile</button>
                </div>
            )}
            <h2>Posts</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Profile;