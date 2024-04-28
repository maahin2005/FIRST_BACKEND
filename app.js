const express = require("express");
const connectDb = require("./config/db");
const userRoutes = require("./Routers/users");
const productRouter = require("./Routers/products");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use("/users", userRoutes);
app.use("/products", productRouter);

app.get("/", (_, res) => {
  res.send("Hello World");
});

app.listen(PORT, async () => {
  try {
    await connectDb(process.env.MONGODB_URL);
    console.log(`Server is listening on ${PORT} and db is connect`);
  } catch (error) {
    console.log(error);
  }
});
