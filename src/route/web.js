import express from "express";
import homeController from "../controller/homeController";

var router = express.Router();

var initWebRoutes = (app) => {
  router.get("/", homeController.getCRUD);

  router.post("/post-crud", homeController.postCRUD);
  return app.use("/", router);
};

module.exports = initWebRoutes;
