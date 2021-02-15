//dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers/burgers_controller')

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3000;

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// middleware for handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(express.static('./public'));
app.use(routes);

//listening
app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);