import db from "../models/index";

var getUser = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (userId) {
        var dataUser = await db.User.findOne({
          raw: true,
          where: { id: userId },
        });
      } else {
        var dataUser = await db.User.findAll();
      }
      if (dataUser == null) {
        resolve("database could not find id");
      } else {
        resolve(dataUser);
      }
    } catch (err) {
      reject(err);
    }
  });
};

var createUser = (dataUser) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (
        !dataUser.email ||
        !dataUser.firstName ||
        !dataUser.lastName ||
        !dataUser.address ||
        !dataUser.PhoneNumber ||
        !dataUser.sex
      ) {
        resolve("Incomplete user information");
      } else {
        await db.User.create({
          email: dataUser.email,
          firstName: dataUser.firstName,
          lastName: dataUser.lastName,
          address: dataUser.address,
          phonenumber: dataUser.PhoneNumber,
          sex: dataUser.sex === "1" ? true : false,
        });
        resolve("ok");
      }
    } catch (err) {
      reject(err);
    }
  });
};

var updateUser = (dataUser) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (
        !dataUser.email ||
        !dataUser.firstName ||
        !dataUser.lastName ||
        !dataUser.address ||
        !dataUser.PhoneNumber ||
        !dataUser.sex ||
        !dataUser.id
      ) {
        resolve("Incomplete user information");
      } else {
        var user = await db.User.findOne({
          where: { id: dataUser.id },
        });
        if (user) {
          user.email = dataUser.email;
          user.phonenumber = dataUser.PhoneNumber;
          user.address = dataUser.address;
          user.firstName = dataUser.firstName;
          user.lastName = dataUser.lastName;
          (user.sex = dataUser.sex === "1" ? true : false), await user.save();
          resolve("ok");
        } else {
          resolve("no users");
        }
      }
    } catch (err) {
      reject(err);
    }
  });
};

var deleteUser = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (userId) {
        var user = await db.User.findOne({
          where: { id: userId },
        });
        if (user) {
          await user.destroy();
          resolve("ok");
        } else {
          resolve("no users");
        }
      } else {
        resolve("no users");
      }
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
