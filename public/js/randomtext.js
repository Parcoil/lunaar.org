// Hey skid or contributor.
// This script uses Math.random() to get a random text option and display it on the index.html

// Array of random text options
var textOptions = [
  "Homework whats that",
  "Rip 3kh0!",
  "Now with a PR00000000000xy! ",
  "The site to cure Total boredness ",
  "A LOT OF GAMES!",
  "shit",
  "What is Google Sites?",
  "No",
  "Yes",
  "insert text here",
  "Unblocked!",
  "Welcome To The New New Native!",
  "Did you know we are open source? Fork US!",
  "https://discord.gg/Pprt5zjv9h",
  "20% Code 80% ChatGPT!",
  "Gas Gas Gas",
  "Daniel gets no girls",
  "Pineapple Cow",
  "chromebooks suck",
  "Lorem ipsum",
  "Snappier is bad at american truck simulator",
  "Doge does not understand why this does not white",
  "technoblade never dies",
  "about:blank on top",
  "minoa Loves cracker",
  "i love cats",
  "cats are better",
  "minoa.cat is the best website (doge approved)",
  "thx sandwich",
  "we love minoa.cat",
  "better than interstellar",
  "NodeJS on top!",
  "Aiden Has a foot fetish",
  "Or what!",
  "Geeeeeeeeeeeeeetar!!!!!!",
  "Powerade Sucks!",
  "Do not insert text here",
  "Doge Loves Metallica",
  "Oh yeah or whatever",
];

// Function to generate random index
function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

// Function to update the text
function updateText() {
  var randomIndex = getRandomIndex(textOptions.length);
  var randomText = textOptions[randomIndex];
  document.getElementById("randomText").textContent = randomText;
}

// Call the function when the page loads
window.onload = updateText;
