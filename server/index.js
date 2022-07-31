const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const connectDB = require("./config/db");
const schema = require("./schema");
require("dotenv").config();

const PORT = process.env.PORT || PORT;

const app = express();

connectDB();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
