const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const db = require('./config/db'); // Import database configuration
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.set('view engine', 'ejs'); // Set the view engine to EJS
app.set('views', path.join(__dirname, 'views')); // Set the views directory

app.use(express.static('public'));


const allRoutes = require('./routes/index');

// Use combined routes
app.use('/', allRoutes);