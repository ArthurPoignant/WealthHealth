import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link
} from "react-router-dom";
import Home from './pages/Home'
import Employee from './pages/Employee';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/employee",
        element: <Employee />,
      },
      {
        path: "*",
        element: <>
          <h1>Error 404: Page not found</h1>
          <Link to="/">Home</Link>
        </>,
      },
    ]
  }
]);

function Root() {
  return <>
    <Outlet />
  </>
}

function App() {
  return <RouterProvider router={router} />
}

export default App;
