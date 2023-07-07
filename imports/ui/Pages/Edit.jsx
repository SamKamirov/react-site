import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useTracker } from 'meteor/react-meteor-data';
import { PostsCollection } from '../../api/PostsCollection';
import { Meteor } from 'meteor/meteor';
import { NavBar } from '../components/NavBar';

export const Edit = () => {
    Meteor.subscribe('posts');

    const { id } = useParams();
    const post = useTracker(() => PostsCollection.find({ _id: id }).fetch()[0]);
    const [content, setContent] = React.useState('');
    const [title, setTitle] = React.useState('');

    const updatePost = (id, title, content) => {
        Meteor.call('posts.update', id, title, content);
    };

    const replaceTitle = () => {
        setTitle(post.title);
    };

    if (post) {
        return (
            <div>
                <NavBar />
                <p>You're on edit page</p>
                <form>
                    <p>
                        <input
                            type='text'
                            value={title}
                            placeholder={post.title}
                            onClick={() => setTitle(post.title)}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </p>
                    <p>
                        <input
                            type='text'
                            value={content}
                            placeholder={post.text}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </p>
                    <button
                        type='submit'
                        onClick={() => updatePost(id, title, content)}>
                        Save
                    </button>
                </form>
            </div>
        );
    }
};
