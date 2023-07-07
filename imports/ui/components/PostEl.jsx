import * as React from 'react';
import { Link } from 'react-router-dom';

export const PostEl = ({ post, onDelete }) => {
    const link = <Link to={`/posts/${post._id}`}>{post.title}</Link>;
    return (
        <li className='posts-el'>
            <div className='card'>
                <div className='card-body'>
                    <h5 className='card-title'>{link}</h5>
                    <p className='card-text'>{post.text}</p>
                    <button
                        onClick={() => onDelete(post)}
                        className='btn btn-primary'>
                        Del
                    </button>
                </div>
            </div>
        </li>
    );
};
