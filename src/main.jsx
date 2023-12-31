import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Home from './components/Home/Home';
import Main from './components/Main/Main';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Statistics from './components/Statistics/Statistics';
import AppliedJobs from './components/Applied Jobs/AppliedJobs';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/Error/Error';
import JobDetils from './components/JobDettils/JobDetils';
import { jobLoader } from './loader/jobloader';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element : <Main></Main>
      },
      {
        path:'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'appliedJobs',
        element: <AppliedJobs></AppliedJobs>,
        loader : jobLoader
      }, 
      {
        path : 'blog',
        element  : <Blog></Blog>
      },
      {
        path : 'job/:jobId',
        element  : <JobDetils></JobDetils>,
        loader:() => fetch('/featuredJobs.json')
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render( <RouterProvider router={router} />)
