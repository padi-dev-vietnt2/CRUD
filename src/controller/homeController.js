import db from "../models/index";
var getHomePage = async (req, res) => {
  try {
    var data = await db.User.findAll();
    return res.render("homePage.ejs", { data: JSON.stringify(data) });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getHomePage,
};
