const { Router } = require("express");

const productRouter = Router();

productRouter.get("/", (req, res) => {
  res.status(200).send("desde product");
});

module.exports = productRouter;
