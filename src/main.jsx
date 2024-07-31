import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './assets/pages/Home.jsx';
import Layout from './assets/Layout/Layout.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";



const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  }

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
