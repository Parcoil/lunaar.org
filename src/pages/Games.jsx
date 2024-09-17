import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Fuse from "fuse.js";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

const Games = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch("/games.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setGames(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const fuse = new Fuse(games, {
    keys: ["name", "url"],
    threshold: 0.3,
  });

  const filteredGames = searchQuery
    ? fuse.search(searchQuery).map((result) => result.item)
    : games;

  return (
    <main>
      <h1>Games</h1>
      <input
        type="text"
        placeholder={`Search Over ${games.length} games...`}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="input input-bordered"
      />
      <div>
        {filteredGames.length === 0 ? (
          <p>No games found</p>
        ) : (
          <div className="games">
            {filteredGames.map((game) => (
              <div key={game.name} className="game">
                <Link to={`/play/${game.url}`}>
                  <LazyLoadImage
                    effect="opacity"
                    src={`/cdn/${game.url}/${game.image}`}
                    alt={game.name}
                    className="w-40 min-w-[200px] min-h-[200px] rounded-3xl"
                  />
                  <p>{game.name}</p>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Games;
