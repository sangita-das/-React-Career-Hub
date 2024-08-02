import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './comoponents/Root/Root';
import Home from './comoponents/Home/Home';
import AppliedJobs from './comoponents/AppliedJobs/AppliedJobs';
import Blogs from './comoponents/Blogs/Blogs';
import ErrorPage from './comoponents/ErrorPage/ErrorPage';
import JobDetails from './comoponents/JobDetails/JobDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/applied",
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('/jobs.json') // only load the data you need, do not load all the data
      },
      {
        path:"/blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "/job/:id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch('../jobs.json') //do not load all data, load only what you need
      }
     
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
