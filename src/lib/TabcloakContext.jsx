import React, { createContext, useState, useEffect, useContext } from "react";

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

const TabcloakContext = createContext();

export const useTabcloak = () => useContext(TabcloakContext);

export const TabcloakProvider = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState(
    localStorage.getItem("tabcloak-option") || "default"
  );

  useEffect(() => {
    localStorage.setItem("tabcloak-option", selectedOption);
    const cloak = cloaks.find((c) => c.name === selectedOption);
    if (cloak) {
      const faviconLink = document.getElementById("favicon");
      if (faviconLink) {
        faviconLink.href = cloak.icon;
      }
      document.title = cloak.title;
    }
  }, [selectedOption]);

  return (
    <TabcloakContext.Provider value={{ selectedOption, setSelectedOption }}>
      {children}
    </TabcloakContext.Provider>
  );
};
