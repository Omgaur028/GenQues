import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Service from "./pages/Service";
import Generate from "./pages/Generate";
import VideoToQuestions from "./components/VideoToQuestions";
import Nav from "./components/Nav";
import CreatePaper from "./pages/CreatePaper";
import Pyq from "./components/Pyq";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Service />} />
          <Route path="/create-paper" element={<CreatePaper />} />
          <Route path="/video-to-questions" element={<VideoToQuestions />} />
          <Route path="/generate" element={<Generate />} />
          <Route path="/pyq" element={<Pyq />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
