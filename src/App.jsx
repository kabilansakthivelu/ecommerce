import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from "./pages/Register";
import Login from "./pages/Login";
import Categories from "./pages/Categories";
import Header from "./components/Header";
import Banner from "./components/Banner";
import { BANNER_CONTENT } from "./utils/constants";
import "./App.css";

export default function App() {
  return (
    <Router>
      <ToastContainer />
      <Header />
      <Banner content={BANNER_CONTENT} />
      <article className="app--container">
        <Routes>
          <Route exact path="/" element={<Categories />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<>Page not found</>} />
        </Routes>
      </article>
    </Router>
  );
}
