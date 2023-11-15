import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import "./app.css";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";

// pages
import Home from "./pages/Home";
import Search from "./pages/Search";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import Data from "./pages/Data";
import Person from "./pages/Person";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/Data" element={<Data />} />
          <Route path="/People" element={<Person />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
