import { useEffect, useState } from "react";

function Footer() {
  const [version, setVersion] = useState("Loading version");

  useEffect(() => {
    const fetchVersion = async () => {
      try {
        const response = await fetch("../package.json");
        const data = await response.json();
        setVersion(data.version);
      } catch (error) {
        console.error("Failed to fetch version:", error);
        setVersion("Version unavailable");
      }
    };

    fetchVersion();
  }, []);

  return (
    <div className="footer">
      <a id="version" href="https://github.com/parcoil/nativegames.net">
        {version} {import.meta.env.DEV ? "(Development)" : ""}
      </a>
    </div>
  );
}

export default Footer;
