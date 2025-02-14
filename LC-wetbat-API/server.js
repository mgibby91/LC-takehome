
require('dotenv').config();

// Node server
const PORT = process.env.PORT || 8088;
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const fs = require("fs");
const path = require("path");

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Database connection
const { Pool } = require('pg');
const { dbParams } = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect(() => {
  console.log('Connected to the db');
});

// Server routes
const quotesRoutes = require('./routes/quotesRoutes');
app.use('/api', quotesRoutes);

// **********************************************
// DB RESET
// **********************************************
function read(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(
      file,
      {
        encoding: "utf-8"
      },
      (error, data) => {
        if (error) return reject(error);
        resolve(data);
      }
    );
  });
}

Promise.all([
  read(path.resolve(__dirname, `db/create.sql`)),
  read(path.resolve(__dirname, `db/development.sql`))
])
  .then(([create, seed]) => {
    app.get("/api/debug/reset", (request, response) => {
      db.query(create)
        .then(() => db.query(seed))
        .then(() => {
          console.log("Database Reset");
          response.status(200).send("Database Reset");
        });
    });
  })
  .catch(error => {
    console.log(`Error setting up the reset route: ${error}`);
  });


// Start server
app.listen(PORT, () => {
  console.log(`API listening on port ${PORT}`);
})
