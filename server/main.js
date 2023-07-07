import { Meteor } from 'meteor/meteor';
import { PostsCollection } from '../imports/api/PostsCollection';
import './methods';

async function insertLink({ title, url }) {
  await LinksCollection.insertAsync({ title, url, createdAt: new Date() });
}

async function insertPost({ title }) {
  await PostsCollection.insertAsync({ title, createdAt: new Date() });
}

Meteor.startup(async () => {
  Meteor.publish("posts", function () {
    return PostsCollection.find({});
  })
});
