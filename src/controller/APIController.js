import APIServices from "../services/APIServices";

var getUser = async (req, res) => {
  var userId = req.query.id;
  var data = await APIServices.getUser(userId);
  return res.status(200).json({
    message: "ok",
    data: data,
  });
};

var createUser = async (req, res) => {
  var dataUser = req.body;
  var message = await APIServices.createUser(dataUser);
  return res.status(200).json({
    message: message,
  });
};

var updateUser = async (req, res) => {
  var dataUser = req.body;
  // var userId = {
  //   userId: req.query.id,
  // };
  // dataUser = { ...dataUser, ...userId };
  var messages = await APIServices.updateUser(dataUser);
  return res.status(200).json({
    message: messages,
  });
};

var deleteUser = async (req, res) => {
  var userId = req.query.id;
  var message = await APIServices.deleteUser(userId);
  return res.status(200).json({
    message: message,
  });
};

module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
