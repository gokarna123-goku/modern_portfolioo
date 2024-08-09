import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Footer from "./components/footer/Footer";
import Project from "./pages/project/Project";
import Article from "./pages/article/Article";
import ArticleDetail from "./pages/article/detail/ArticleDetail";

function App() {
  return (
    <>
      <Router>
        <div className="w-full min-h-screen bg-neutral-950 flex flex-col text-neutral-300">
          {/* Navbar */}
          <Navbar />

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/projects" element={<Project />} />
            <Route exact path="/articles" element={<Article />} />
            <Route exact path="/me" element={<About />} />

            {/* Article detail */}
            <Route exact path="/article-detail" element={<ArticleDetail />} />

          </Routes>

          {/* Footer */}
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
