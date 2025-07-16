import React, { useState } from 'react';


interface PostProps {
    content: string;
    author: string;
    onLike: () => void;
    onComment: (comment: string) => void;
    
}

const Post: React.FC<PostProps> = ({ content, author, onLike, onComment }) => {
    const [comments, setComments] = useState<string[]>([]);
    const [commentInput, setCommentInput] = useState<string>('');

    const handleCommentSubmit = () => {
        if (commentInput) {
            setComments([...comments, commentInput]);
            onComment(commentInput);
            setCommentInput('');
        }
    };

    return (
        <div className="post">
            <h3>{author}</h3>
            <p>{content}</p>
            <button onClick={onLike}>Like</button>
            <div>
                <input
                    type="text"
                    value={commentInput}
                    onChange={(e) => setCommentInput(e.target.value)}
                    placeholder="Add a comment..."
                />
                <button onClick={handleCommentSubmit}>Comment</button>
            </div>
            <div className="comments">
                {comments.map((comment, index) => (
                    <div key={index} className="comment">
                        {comment}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Post;