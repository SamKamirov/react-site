import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { App } from '/imports/ui/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage } from '../imports/ui/Pages/error-page';
import { Post, postLoader } from '../imports/ui/components/Post';
import '../client/main.css';
import { Edit } from '../imports/ui/Pages/Edit';
import { NavBar } from '../imports/ui/components/NavBar';
import 'bootstrap/dist/css/bootstrap.css';

const container = document.getElementById('react-target');
const root = ReactDOM.createRoot(container);

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/posts/:id',
        element: <Post />,
        loader: postLoader,
        errorElement: <ErrorPage />,
    },
    {
        path: '/posts/:id/edit',
        element: <Edit />,
        loader: postLoader,
        errorElement: <ErrorPage />,
    },
]);

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
