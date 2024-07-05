const { Router } = require("express");

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.status(200).send("desde usuarios");
});

module.exports = userRouter;
