import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TodosProvider } from './utils/TodoContext';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Active from './components/Pages/Active';
import Completed from './components/Pages/Completed';
import TodoRender from './components/TodoRender';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <TodoRender />,
      },
      {
        path: "/active",
        element: <Active />,
      },
      {
        path: "/completed",
        element: <Completed />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <TodosProvider>
      <RouterProvider router={appRouter} />
    </TodosProvider>
  </React.StrictMode>
);
