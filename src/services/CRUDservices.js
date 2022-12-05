import db from "../models/index";

var crateUsers = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.User.create({
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        phonenumber: data.PhoneNumber,
        sex: data.sex === "1" ? true : false,
      });
      resolve("them vao database thanh cong");
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = {
  crateUsers,
};
