const express = require("express");
const { graphqlHTTP } = require("express-graphql");

const app = express();
const PORT = process.env.PORT || 5000;

app.use("/api", graphqlHTTP({}));

app.listen(PORT, () => {
  console.log("Now listening on port 3000");
});
