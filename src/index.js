import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Redirect,
} from "react-router-dom";

import FriendsPage from './containers/friendsPage/friendsPage';
import GalleryPage from './containers/galleryPage/galleryPage';
import MainPage from './containers/mainPage/mainPage';
import MessagesPage from './containers/messagesPage/messagesPage';
import ErrorPage from './error-page';
import './index.css';

import Root from './routes/root';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root /> ,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/mainpage",
        element: <MainPage />,
      },
      {
        path: "/messagespage",
        element: <MessagesPage />,
      },
      {
        path: "/friendspage",
        element: <FriendsPage />,
      },
      {
        path: "/gallerypage",
        element: <GalleryPage />
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>
);