import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { toast } from "react-toastify";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import "./css/index.css";
import "./css/themes.css";
import Header from "./components/Header";
import Games from "./pages/Games";
import Settings from "./pages/Settings";
import Go from "./pages/go";
import Play from "./pages/Play";
import Par from "./components/Par";
import Apps from "./pages/Apps";

function App() {
  const savedTheme = localStorage.getItem("theme");
  const [showPar, setShowPar] = useState(true);
  document.body.setAttribute("theme", savedTheme);
  useEffect(() => {
    if (navigator.userAgent.indexOf("Firefox") !== -1) {
      alert("Firefox is a bit buggy on nativegames. Please use chrome");
    }

    const starsVisible = localStorage.getItem("starsVisible");
    if (starsVisible !== null) {
      setShowPar(starsVisible === "true");
      localStorage.setItem(starsVisible, "true");
    }
  }, []);

  return (
    <div>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/science" element={<Games />} />
          <Route path="/math" element={<Apps />} />
          <Route path="/play/:game" element={<Play />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/go/" element={<Go />} />
        </Routes>

        {/* Conditionally render the Par component */}
        {showPar && <Par />}
      </Router>
    </div>
  );
}

export default App;
