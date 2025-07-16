import React, { useEffect, useState } from 'react';
import Post from './Post';


type PostType = {
    id: number;
    title: string;
    content: string;
    // other fields...
};

export async function fetchPosts() {
    // Replace with your actual API call logic
    return [
        { id: 1, title: 'Author 1', content: 'Post content 1' },
        { id: 2, title: 'Author 2', content: 'Post content 2' }
    ];
}

const Feed: React.FC = () => {
    const [posts, setPosts] = useState<PostType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const loadPosts = async () => {
            const fetchedPosts = await fetchPosts();
            setPosts(fetchedPosts as PostType[]);
            setLoading(false);
        };

        loadPosts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            
            {posts.map((post) => (
                <Post
                    key={post.id}
                    content={post.content}
                    author={post.title} // Assuming title is the author's name
                    onLike={() => console.log(`Liked post ${post.id}`)}
                    onComment={(comment) => console.log(`Commented on post ${post.id}: ${comment}`)}
                />
            ))}
            
        </div>
    );
};

export default Feed;