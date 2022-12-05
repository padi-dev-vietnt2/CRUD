import CRUDservices from "../services/CRUDservices";

var getCRUD = (req, res) => {
  return res.render("crud.ejs");
};

var postCRUD = async (req, res) => {
  var data = req.body;
  var message = await CRUDservices.crateUsers(data);
  console.log(message);
  return res.render("crud.ejs");
};

module.exports = {
  getCRUD,
  postCRUD,
};
