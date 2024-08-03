import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="w-full min-h-screen bg-neutral-950 flex flex-col text-neutral-300">
          {/* Navbar */}
          <p>This is the navbar section.</p>
          {/* <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes> */}

          {/* Footer */}
        </div>
      </Router>
    </>
  )
}

export default App
