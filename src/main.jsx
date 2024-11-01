import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/Footer/error';
import HomeBanner from './components/nav/home';
import AboutUs from './components/nav/About';
import Explore from './components/Explore/Explore';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <HomeBanner></HomeBanner>
      },
      {
        path: '/dashboard',
        element: <div>dddd</div>
      },
      {
        path: '/explore',
        element: <Explore></Explore>
      },
      {
        path: '/about',
        element: <AboutUs></AboutUs>
      },

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
