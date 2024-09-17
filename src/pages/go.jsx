import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import SearchForm from "../components/SearchForm";

function Go() {
  const navigate = useNavigate();
  const iframeRef = useRef(null);

  const handleBack = () => {
    if (iframeRef.current) iframeRef.current.contentWindow.history.back();
  };

  const handleForward = () => {
    if (iframeRef.current) iframeRef.current.contentWindow.history.forward();
  };

  const handleHome = () => {
    navigate("/");
  };

  const handleRefresh = () => {
    if (iframeRef.current) iframeRef.current.contentWindow.location.reload();
  };

  const handleFullscreen = () => {
    if (iframeRef.current) {
      const iframeDocument = iframeRef.current.contentWindow.document;
      const requestFullscreen =
        iframeDocument.documentElement.requestFullscreen ||
        iframeDocument.documentElement.mozRequestFullScreen ||
        iframeDocument.documentElement.webkitRequestFullscreen ||
        iframeDocument.documentElement.msRequestFullscreen;

      if (requestFullscreen) {
        requestFullscreen.call(iframeDocument.documentElement);
      }
    }
  };

  const handleOpenInNewTab = () => {
    if (iframeRef.current) {
      window.open(iframeRef.current.src, "_blank");
    }
  };

  const prxurl = localStorage.getItem("prxurl") || "about:blank";

  return (
    <main>
      <div style={{ position: "fixed" }} className="z">
        <h1>Loading...</h1>
      </div>
      <div className="prxbar">
        <div className="prxbuttons">
          <button className="btn" onClick={handleBack}>
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button className="btn" onClick={handleForward}>
            <i className="fa-solid fa-arrow-right"></i>
          </button>

          <button className="btn" onClick={handleRefresh}>
            <i className="fa-solid fa-arrow-rotate-right"></i>
          </button>
        </div>
        <SearchForm />
        <div className="prxbuttons">
          <button className="btn" onClick={handleHome}>
            <i className="fa-solid fa-house"></i>
          </button>
          <button className="btn" onClick={handleFullscreen}>
            <i className="fa-solid fa-expand"></i>
          </button>
          <button className="btn" onClick={handleOpenInNewTab}>
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </button>
        </div>
      </div>
      <iframe
        ref={iframeRef}
        src={prxurl}
        id="frame"
        className="w-screen h-screen"
        title="Content"
      ></iframe>
    </main>
  );
}

export default Go;
