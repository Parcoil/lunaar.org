import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const cloaks = [
  { name: "default", icon: "./media/logo.svg", title: "Native" },
  {
    name: "drive",
    icon: "./media/cloaks/googledrive.png",
    title: "Home - Google Drive",
  },
  {
    name: "classNameroom",
    icon: "./media/cloaks/classNameroom.png",
    title: "Home",
  },
  { name: "zoom", icon: "./media/cloaks/zoom.png", title: "Zoom" },
];

function Settings() {
  const [searchEngine, setSearchEngine] = useState("");
  const [starsVisible, setStarsVisible] = useState(false);
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "default";
  });
  const [selectedOption, setSelectedOption] = useState("default");
  const navigate = useNavigate();

  const searchEngineUrls = {
    google: "https://www.google.com/search?q=%s",
    bing: "https://www.bing.com/search?q=%s",
    brave: "https://search.brave.com/search?q=%s",
    ddg: "https://duckduckgo.com/?q=%s",
  };

  useEffect(() => {
    // Load saved settings
    const savedEngineUrlPattern = localStorage.getItem("searchEngine");
    if (savedEngineUrlPattern) {
      const engine = Object.keys(searchEngineUrls).find(
        (key) => searchEngineUrls[key] === savedEngineUrlPattern
      );
      if (engine) {
        setSearchEngine(engine);
      }
    }

    const starsValue = localStorage.getItem("starsVisible");
    if (starsValue !== null) {
      setStarsVisible(starsValue === "true");
    }

    const savedOption = localStorage.getItem("tabcloak-option") || "default";
    setSelectedOption(savedOption);
    updateFaviconAndTitle(savedOption);
  }, []);

  useEffect(() => {
    document.body.setAttribute("theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleSearchEngineChange = (event) => {
    const selectedEngine = event.target.value;
    setSearchEngine(selectedEngine);
    const searchUrlPattern = searchEngineUrls[selectedEngine];
    localStorage.setItem("searchEngine", searchUrlPattern);
    toast.info(
      `Search Engine set to ${
        event.target.options[event.target.selectedIndex].text
      }`
    );
  };

  const handleChangeCloak = (event) => {
    const option = event.target.value;
    setSelectedOption(option);
    updateFaviconAndTitle(option);
    localStorage.setItem("tabcloak-option", option);
    toast.info(`Cloak changed to ${event.target.value}`);
  };

  const updateFaviconAndTitle = (option) => {
    const cloak = cloaks.find((c) => c.name === option);
    if (cloak) {
      const faviconLink = document.getElementById("favicon");
      if (faviconLink) {
        faviconLink.href = cloak.icon;
      }
      document.title = cloak.title;
    }
  };

  const aboutBlank = () => {
    const newWindow = window.open();
    newWindow.document.body.style.margin = "0";
    newWindow.document.body.style.height = "100vh";
    const iframe = newWindow.document.createElement("iframe");
    iframe.style.border = "none";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.referrerpolicy = "no-referrer";
    iframe.style.margin = "0";
    iframe.src = window.location.href;
    history.replaceState(null, "", "");
    window.location.replace(
      "https://www.google.com/search?q=what+day+is+today"
    );
    newWindow.document.body.appendChild(iframe);
  };

  const toggleStars = (show) => {
    setStarsVisible(show);
    localStorage.setItem("starsVisible", show ? "true" : "false");
    toast.info(`Stars ${show ? "enabled" : "disabled"}`);
  };
  const resetSettings = () => {
    localStorage.clear();
    sessionStorage.clear;
    window.location.reload();
  };
  const hmm = () => {
    let checkTheme = localStorage.getItem("theme");

    if (checkTheme === "new") {
      alert(
        "01101000 01110100 01110100 01110000 01110011 00111010 00101111 00101111 01100100 01110011 01100011 00101110 01100111 01100111 00101111 01110000 01100001 01110010 01100011 01101111 01101001 01101100"
      );
    } else {
      localStorage.setItem("theme", "new");
      window.location.reload();
    }
  };
  return (
    <>
      <div className="cards">
        <div className="card">
          <h1>Theme</h1>
          <p>Changes the theme on Native</p>
          <select
            className="select select-bordered w-full max-w-xs"
            onChange={(e) => {
              setTheme(e.target.value);
              toast.info(`Theme changed to ${e.target.value}`);
            }}
            value={theme}
          >
            <option value="default">Main Theme</option>
            <option value="grey">Cool Grey</option>
            <option value="light">Light (NEW)</option>
            <option value="mocha">Mocha (NEW)</option>
            <option value="new" hidden>
              ???
            </option>
            <option value="orange">Orange (NEW)</option>
            <option value="youtube-dark">Youtube Dark (NEW)</option>
            <option value="greyblack">Grey black Theme</option>
            <option value="3kh0">3kh0</option>
            <option value="artclass">Artclass</option>
            <option value="bone">BONELAB theme</option>
            <option value="ghost">Black & Red Theme</option>
            <option value="gb">Greyish Blue</option>
            <option value="gg">Greyish Green</option>
            <option value="brown">Brown</option>
            <option value="dg">Dark Orange</option>
            <option value="moon">Moon</option>
            <option value="red">Red Theme (static)</option>
            <option value="sblue">Sahara Blue Theme</option>
            <option value="candy">Cotton Candy Theme</option>
          </select>
        </div>
        <div className="card">
          <h1>Tab Cloak</h1>
          <p>Cloaks the tab bar of Native</p>
          <select
            name="cloak"
            id="cloakSelect"
            className="select select-bordered w-full max-w-xs"
            value={selectedOption}
            onChange={handleChangeCloak}
          >
            {cloaks.map((cloak) => (
              <option key={cloak.name} value={cloak.name}>
                {cloak.name.charAt(0).toUpperCase() + cloak.name.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <div className="card">
          <h1>Search Engine</h1>
          <p>Changes the search engine of Native</p>
          <select
            className="select select-bordered"
            value={searchEngine}
            onChange={handleSearchEngineChange}
          >
            <option value="google">Google</option>
            <option value="bing">Bing</option>
            <option value="brave">Brave</option>
            <option value="ddg">DuckDuckGo</option>
          </select>
        </div>
        <div className="card">
          <h1>About:blank</h1>
          <p>Opens Native in About:blank</p>
          <button className="btn btn-primary" onClick={aboutBlank}>
            Launch
          </button>
        </div>
        <div className="card">
          <h1>Stars Toggle</h1>
          <p>Toggles the display of stars in the background of Native</p>
          <p>REFRESH REQUIRED</p>
          <button
            className={`btn ${starsVisible ? "btn-secondary" : "btn-primary"}`}
            onClick={() => toggleStars(true)}
          >
            Set on
          </button>
          <button
            className={`btn ${!starsVisible ? "btn-secondary" : "btn-primary"}`}
            onClick={() => toggleStars(false)}
          >
            Set off
          </button>
        </div>
        <div className="card">
          <h1>???</h1>
          <p>???</p>
          <button onClick={hmm}>???</button>
        </div>
        <div className="card">
          <h1>Reset all settings</h1>
          <p>Resets all settings to their default values</p>
          <button onClick={resetSettings}>Reset</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Settings;
