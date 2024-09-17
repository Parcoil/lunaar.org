import React, { useRef } from "react";
import { useParams } from "react-router-dom";

function Play() {
  const { game } = useParams();
  const iframeRef = useRef(null);

  const fullscreen = () => {
    if (iframeRef.current) {
      if (iframeRef.current.requestFullscreen) {
        iframeRef.current.requestFullscreen();
      } else if (iframeRef.current.mozRequestFullScreen) {
        iframeRef.current.mozRequestFullScreen();
      } else if (iframeRef.current.webkitRequestFullscreen) {
        iframeRef.current.webkitRequestFullscreen();
      } else if (iframeRef.current.msRequestFullscreen) {
        iframeRef.current.msRequestFullscreen();
      }
    }
  };

  return (
    <>
      <main>
        <div className="playcontainer">
          <div className="loader"></div>
          <iframe
            src={`/cdn/${game}/`}
            className="w-full h-full"
            ref={iframeRef}
            id="gameiframe"
            title={game}
          />
          <div className="playcontainer-footer">
            <h1 className="text-1xl">{game}</h1>
            <button onClick={fullscreen}>
              <i className="fa-solid fa-expand"></i>
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Play;
