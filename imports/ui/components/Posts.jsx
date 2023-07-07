import * as React from 'react';
import { PostsCollection } from '../../api/PostsCollection';
import { useTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';
import { PostEl } from './PostEl';

export const Posts = () => {
    Meteor.subscribe('posts');

    const posts = useTracker(() => {
        return PostsCollection.find().fetch();
    });

    const deletePost = ({ _id }) => {
        Meteor.call('posts.remove', _id);
    };

    return (
        <div>
            <ul className='posts'>
                {posts.map((post) => (
                    <PostEl key={post._id} post={post} onDelete={deletePost} />
                ))}
            </ul>
        </div>
    );
};
