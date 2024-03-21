import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
      <Header />
      <Banner content={BANNER_CONTENT} />
      <article className="app--container">
        <Routes>
          <Route path="/" element={<Categories />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </article>
    </Router>
  );
}
