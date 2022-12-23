import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './componentes/Home'
import Education from './componentes/Education'
import Experience from './componentes/Experience'
import Portfolio from './componentes/Portfolio'
import Skills from './componentes/Skills'
import App from './App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/education",
    element: <Education/>
  },
  {
    path: "/experience",
    element: <Experience/>
  },
  {
    path: "/portfolio",
    element: <Portfolio/>
  },
  {
    path: "/skills",
    element: <Skills/>
  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
