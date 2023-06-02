const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routesUrls = require("./routes/routes");
const cors = require("cors");

dotenv.config();
// backend code
mongoose.connect(
  process.env.DATABASE_ACCESS,
  { useNewUrlParser: true, useUnifiedTopology: true }
)
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Error connecting to the database: " + err);
  });
  app.get('/', (request, response) => {
    // Logic to render the dashboard page or send the response
    response.redirect('/');
    });
  



app.use(express.json());
app.use(cors());
app.use("/app", routesUrls);
app.listen(process.env.PORT, () => console.log("Server is running..."));
