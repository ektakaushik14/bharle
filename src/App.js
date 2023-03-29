import "./App.css";
import Nav from "./Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import Latest from "./Components/Latest";
import Write from "./Components/Write";
import Blog from "./Components/Blog";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/latest" element={<Latest />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/write" element={<Write />} />
          <Route path="*" element={<Landing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
