import express from "express";
import APIController from "../controller/APIController";
let router = express.Router();

var initAPIRoutes = (app) => {
  router.get("/get-user", APIController.getUser);
  router.post("/create-user", APIController.createUser);
  router.put("/update-user", APIController.updateUser);
  router.delete("/delete-user", APIController.deleteUser);

  return app.use("/api/v1", router);
};

export default initAPIRoutes;
