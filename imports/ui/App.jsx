import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Meteor } from 'meteor/meteor';
import { PostsCollection } from '../api/PostsCollection';
import { useTracker } from 'meteor/react-meteor-data';
import { Outlet, Link } from 'react-router-dom';
import { Posts } from './components/Posts';
import { AppForm } from './Forms/AppForm';
import { AddPost } from './components/AddPost';
import { NavBar } from './components/NavBar';

export const App = () => {
    return (
        <div className='app-container'>
            <div className='app-form'>
                <NavBar />
                <Outlet />
                <AddPost />
                <Posts />
            </div>
        </div>
    );
};
