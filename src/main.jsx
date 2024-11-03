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
import BookDatail from './components/Explore/BookDatail';
import ListedBooks from './components/Explore/ListedBooks';
import Dashboard from './components/nav/DashBoard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        element: <Dashboard></Dashboard>
      },
      {
        path: '/explore',
        element: <Explore></Explore>
      },
      {
        path: '/explore/books/:bookId',
        element: <BookDatail></BookDatail>,
        loader: () => fetch('/booksData.json')
      },
      {
        path: '/explore/listedBook',
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('/booksData.json')

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
    <ToastContainer />
  </StrictMode>,
)
