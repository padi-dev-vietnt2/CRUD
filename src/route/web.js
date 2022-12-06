import express from "express";
import homeController from "../controller/homeController";

var router = express.Router();

var initWebRoutes = (app) => {
  router.get("/", homeController.createUser);

  router.post("/post-crud", homeController.postCRUD);
  router.get("/get-crud", homeController.getCRUD);
  router.get("/edit-crud", homeController.getEditCRUD);
  router.post("/put-crud", homeController.putEditCRUD);

  return app.use("/", router);
};

module.exports = initWebRoutes;
