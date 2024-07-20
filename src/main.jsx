import React from 'react'
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx';

import ChatCoverPage from './components/sections/chatUI/ChatCoverPage.jsx'

import './index.css';
import ChatRoom from './components/sections/chatUI/ChatRoom.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/dashboard" />
  },
  {
    path: "/dashboard",
    element: <App />,
  },
  {
    path: '/chat',
    element: <ChatCoverPage />
  },
  {
    path: '/chat-room',
    element: <ChatRoom />
  },
  
  
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
