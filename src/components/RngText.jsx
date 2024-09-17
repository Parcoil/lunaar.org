import React from "react";

const texts = [
  "Welcome to Native v5!",
  "What's up brother!",
  "Do not insert text here",
  "They not like us",
  "1 + 1 = 11",
  "LUNAARR",
  "insert text here",
  "🧀",
  "🥚",
  "🌙",
  "My CPU is 156 degrees :)",
  "Spicy Nacho Doritos are good",
  "Yo so games are cool",
  "Aiden does questionable things...",
  "Bonelab = Garys mod",
  "Elden Ring on top - wavy ",
  "Insert text here",
  'Join our Discord: <a href="https://dsc.gg/parcoil">https://dsc.gg/parcoil</a>',
  'Join our Discord For <a href="https://dsc.gg/parcoil">Links</a>',
  "Or what!",
  "Ewww Homework whats that",
  "shit",
  "Powerade Sucks!",
  "The site to cure total boardness",
  "Activate Native.",
  'Did you know native used to be a <a href="https://sites.google.com/view/thebestonlinegames/index?authuser=1">google site?</a>',
];

function RngText() {
  const getRandomText = () => {
    const randomIndex = Math.floor(Math.random() * texts.length);
    return texts[randomIndex];
  };

  return (
    <div
      dangerouslySetInnerHTML={{ __html: getRandomText() }}
      className="mb-5"
    />
  );
}

export default RngText;
