const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Remove .html extension from URLs
app.use((req, res, next) => {
  const filePath = path.join(__dirname, 'public', `${req.path}.html`);
  res.sendFile(filePath, (err) => {
    if (err) {
      next();
    }
  });
});

// Handle 404 - Not Found
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(``);
  console.log(`Nativegames Running on port ${PORT}`);
  console.log(``);
  console.log(`https://github.com/Parcoil/nativegames.net`);
  console.log(``);
  console.log(`Made by The Parcoil Network :)`);
});
