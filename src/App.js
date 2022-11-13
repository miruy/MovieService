import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/about" element={<About />} />
      <Route path="/" element={<Home />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}


export default App;