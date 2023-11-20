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
        "insert text here",
        "Unblocked!",
        "Welcome To The New New Native!",
        "Did you know we are open source? Fork US!",
        "https://discord.gg/Pprt5zjv9h",
        "20% Code 80% ChatGPT!",
        "Gas Gas Gas",
        "Daniel gets no girls",
          "Pineapple Cow",
          "chromebooks suck a$$",
          "Lorem ipsum",
          "😁",
          "🙊",
          "technoblade never dies",
          "about:blank on top"
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