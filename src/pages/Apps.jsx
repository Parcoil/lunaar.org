import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Fuse from "fuse.js";
import { toast } from "react-toastify";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

function Apps() {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchApps = async () => {
      try {
        const response = await fetch("/apps.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setApps(data);
      } catch (error) {
        setError("Failed to load apps. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchApps();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const fuse = new Fuse(apps, {
    keys: ["name", "url"],
    threshold: 0.3,
  });

  const filteredApps = searchQuery
    ? fuse.search(searchQuery).map((result) => result.item)
    : apps;

  const handleClick = (app) => {
    if (import.meta.env.DEV) {
      toast.error("Apps only work in Production mode.");
    } else {
      localStorage.setItem(
        "prxurl",
        __uv$config.prefix + __uv$config.encodeUrl(app.url)
      );
      navigate("/go/");
    }
  };

  return (
    <main>
      <h1>Apps</h1>
      <input
        type="text"
        placeholder="Search apps..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="input input-bordered"
      />
      <div>
        {filteredApps.length === 0 ? (
          <p>No apps found</p>
        ) : (
          <div className="apps">
            {filteredApps.map((app) => (
              <div key={app.name} className="app">
                <LazyLoadImage
                  onClick={() => handleClick(app)}
                  effect="opacity"
                  src={app.image}
                  alt={app.name}
                />
                <p>{app.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default Apps;
