import React, { Component, useState } from 'react';
import {
    Link,
    Outlet,
    matchPath,
    useLoaderData,
    useLocation,
    useParams,
} from 'react-router-dom';
import { ReactDOM } from 'react-dom';
import { PostsCollection } from '../../api/PostsCollection';
import { Form } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { NavBar } from './NavBar';

export async function postLoader({ params }) {
    const post = PostsCollection.findOne({ _id: params.id });
    return { post };
}

export const Post = () => {
    Meteor.subscribe('posts');

    const { id } = useParams();
    let { post } = useLoaderData();

    function GetPost(id) {
        const post = useTracker(() =>
            PostsCollection.find({ _id: id }).fetch()
        );
        return post[0];
    }

    if (!post) {
        post = GetPost(id);
    }

    if (post) {
        return (
            <div className=''>
                <NavBar />
                <Outlet />
                <Link to='edit'>Edit</Link>
                <div className='post'>
                    <div className='post-body'>
                        <h5 className='card-title'>Title: {post.title}</h5>
                        <p className='card-text'>Text: {post.text}</p>
                        <p className='card-text'>
                            Publication date: {post.createdAt.toDateString()}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
};
