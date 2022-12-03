import express from "express";
import homeController from "../controller/homeController";

var router = express.Router();

var initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);

  return app.use("/", router);
};

module.exports = initWebRoutes;
