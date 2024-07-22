import React from 'react'
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { Provider } from 'react-redux'

import App from './App.jsx';

import ChatCoverPage from './components/sections/chatUI/ChatCoverPage.jsx'

import './index.css';
import ChatRoom from './components/sections/chatUI/ChatRoom.jsx';
import SignIn from './components/sections/signin/SignIn.jsx';
import SignUp from './components/sections/createAnAccount/SignUp.jsx';

import store from './redux/store'

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
  {
    path: '/sign-in',
    element: <SignIn />
  },
  {
    path: '/sign-up',
    element: <SignUp />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
