import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Feed from '../components/Feed';

const Home: React.FC = () => {
    // Replace this with real authentication logic
    const [isLoggedIn] = useState<boolean>(false);
    const navigate = useNavigate();

    return (
        <div>
            <h1>Welcome To Connect</h1>
            <p>Your social media platform for connecting with friends and sharing moments.</p>
            {!isLoggedIn && (
                <div style={{ display: 'flex', gap: 16, margin: '16px 0' }}>
                    <button onClick={() => navigate('/login')}>Login</button>
                    <button onClick={() => navigate('/register')}>Register</button>
                </div>
            )}
            <Feed />
        </div>
    );
};

export default Home;