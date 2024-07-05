const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const userRouter = require("./routes/users");
const productRouter = require("./routes/products");
const orderRouter = require("./routes/order");

require("./db");

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "OPTIONS", "PUT", "DELETE"],
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
  })
);

server.use("/users", userRouter);
server.use("/products", productRouter);
server.use("/order", orderRouter);

module.exports = server;
