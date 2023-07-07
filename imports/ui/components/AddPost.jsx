import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';

export const AddPost = () => {
    const [postTitle, setTitle] = useState('');
    const [postText, setText] = useState('');

    function add(e) {
        e.preventDefault();
        console.log(postTitle);
        Meteor.call('posts.insert', postTitle, postText);
        setTitle('');
        setText('');
    }

    return (
        <div className='input-form-wrapper'>
            <form onSubmit={add} className='input-form mb-3'>
                <input
                    type='text'
                    className='form-control'
                    value={postTitle}
                    placeholder='Enter the title'
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    className='form-control'
                    type='text'
                    value={postText}
                    placeholder='Enter the text of the post'
                    onChange={(e) => setText(e.target.value)}
                />
                <button type='submit' className='btn btn-primary'>
                    Add
                </button>
            </form>
        </div>
    );
};
