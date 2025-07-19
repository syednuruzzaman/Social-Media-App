import React from 'react';
import { useNavigate } from 'react-router-dom';
import Feed from '../components/Feed';
import { useAuth } from '../App';

const Home: React.FC = () => {
    const navigate = useNavigate();
    const { user, logout } = useAuth();

    return (
        <div>
            <h1>Welcome To Connect</h1>
            <p>Your social media platform for connecting with friends and sharing moments.</p>
            {!user ? (
                <div style={{ display: 'flex', gap: 16, margin: '16px 0' }}>
                    <button onClick={() => navigate('/login')}>Login</button>
                    <button onClick={() => navigate('/register')}>Register</button>
                </div>
            ) : (
                <div style={{ margin: '16px 0' }}>
                    <button onClick={logout}>Logout</button>
                </div>
            )}
            <Feed />
        </div>
    );
};

export default Home;