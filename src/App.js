import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./about/about";
import "./App.css";
import Contact from "./contact/contact";
import Documents from "./documents/documents";
import Footer from "./footer/footer";
import Header from "./header/header";
import Navbar from "./navbar/navbar";
import News from "./news/news";

function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<News />} />
          <Route path="/o-szkole" element={<About />} />
          <Route path="/dokumenty" element={<Documents />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
