import CRUDservices from "../services/CRUDservices";

var createUser = (req, res) => {
  return res.render("createUser.ejs");
};

var postCRUD = async (req, res) => {
  var data = req.body;
  var message = await CRUDservices.crateUsers(data);
  console.log(message);
  return res.render("createUser.ejs");
};

var getCRUD = async (req, res) => {
  var data = await CRUDservices.getAllUsers();
  res.render("getCRUD.ejs", { data: data });
};

module.exports = {
  getCRUD,
  postCRUD,
  createUser,
};
