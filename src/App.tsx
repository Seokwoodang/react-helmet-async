import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import Hello from "./page/Hello";
import { Helmet } from "react-helmet-async";

function App() {
  return (
    <>
      <Helmet>
        <title>Hello</title>
      </Helmet>
      <Routes>
        <Route element={<Home />} path="/"></Route>
        <Route element={<Hello />} path="/hello"></Route>
      </Routes>
    </>
  );
}

export default App;
