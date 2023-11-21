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
        "technoblade never dies",
        "about:blank on top",
        "native now has ads???",
        "minoa is a cracker",
        "i love cats",
        "dogs are better",
        "minoa.cat is the best website (doge approved)",
        "inchrys has testicles the size of ants",
        "thx sandwich",
        "Riley is not sped",
        "we love minoa.cat"
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