import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
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
      ]
  }
]);

function Root() {
  return <>
  <Outlet />
  </>
}

function App() {
  return <RouterProvider router={router}/>
}

export default App;
