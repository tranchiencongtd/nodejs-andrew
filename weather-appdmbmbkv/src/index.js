const express = require('express');
const path = require('path');

// ----------------
const routes = require('./resources/routes');

// -----------------
const app = express();
const port = process.env.PORT || 3000;

// Static file on your app
app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
app.set('views', path.join(__dirname, 'resources', 'views'));
app.set('view engine', 'pug');

// init routes
routes(app);

// Run server
app.listen(port, () => {
  console.log(`App listening at PORT: http://localhost:${port}`);
});
