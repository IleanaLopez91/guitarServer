const { Router } = require("express");

const orderRouter = Router();

orderRouter.get("/", (req, res) => {
  res.status(200).send("desde pedidos");
});

module.exports = orderRouter;
