import { Meteor } from 'meteor/meteor';
import { PostsCollection } from '../imports/api/PostsCollection';

Meteor.methods({
    'posts.insert': function(title, text) {
        PostsCollection.insert({
            title,
            text,
            createdAt: new Date()
        })
    },
    'posts.remove': function(id) {
        PostsCollection.remove(id)
    },
    'posts.getById': function(id) {
        PostsCollection.findOne({_id: id})
    },
    'posts.update': function(id, title, text) {
        PostsCollection.update(id, {
            $set: {
                title: title,
                text: text,
                createdAt: new Date()
            }
        })
    }
})