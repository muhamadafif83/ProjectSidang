import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./MainPage/about/about";
import Product from "./MainPage/product/product";
import Home from "./MainPage/home/home";
import ModalComponent from "./MainPage/product/modalProduct";
import Blog from "./MainPage/blog/blog";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/test" element={<ModalComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
