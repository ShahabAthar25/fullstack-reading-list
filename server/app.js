const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, () => {
  console.log("connected to database");
});

app.use(
  "/api",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log("Now listening on port 3000");
});
