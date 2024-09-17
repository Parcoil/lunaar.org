import React, { useRef, useState } from "react";

// SearchForm Component
const SearchForm = () => {
  const [error, setError] = useState("");
  const [errorCode, setErrorCode] = useState("");
  const addressRef = useRef(null);
  const searchEngineRef = useRef(
    localStorage.getItem("searchEngine") || "https://www.google.com/search?q=%s"
  );

  const search = async (address, searchEngine) => {
    const connection = new BareMux.BareMuxConnection("/baremux/worker.js");

    try {
      await registerSW();
    } catch (err) {
      setError("Failed to register service worker.");
      setErrorCode(err.toString());
      return;
    }

    // Check if address starts with 'http://' or 'https://'
    let url;
    if (address.startsWith("http://") || address.startsWith("https://")) {
      url = address; // Use the provided URL directly
    } else {
      // Otherwise, use the search engine
      url = searchEngine.replace("%s", encodeURIComponent(address));
    }

    const wispUrl = `${location.protocol === "https:" ? "wss" : "ws"}://${
      location.host
    }/wisp/`;

    if ((await connection.getTransport()) !== "/epoxy/index.mjs") {
      await connection.setTransport("/epoxy/index.mjs", [{ wisp: wispUrl }]);
    }

    localStorage.setItem(
      "prxurl",
      `${__uv$config.prefix}${__uv$config.encodeUrl(url)}`
    );
    window.location = "/go/";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const address = addressRef.current.value;
    const searchEngine = searchEngineRef.current.value;

    try {
      await search(address, searchEngine);
    } catch (err) {
      setError("An error occurred during the search.");
      setErrorCode(err.toString());
    }
  };

  return (
    <>
      <form id="uv-form" className="" onSubmit={handleSubmit}>
        <input
          id="uv-search-engine"
          defaultValue={searchEngineRef.current}
          type="hidden"
          ref={searchEngineRef}
        />
        <input
          id="uv-address"
          type="text"
          placeholder="Surf the web freely."
          ref={addressRef}
        />
        <button type="submit" className="search-right">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
      {error && (
        <div>
          <p id="uv-error">{error}</p>
          <pre id="uv-error-code">{errorCode}</pre>
        </div>
      )}
    </>
  );
};

export default SearchForm;
