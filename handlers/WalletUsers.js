const WalletUsers = require("../models/WalletUsers");
const db = require("../models/WalletUsers");

exports.AddWalletUsers = async (req, res, next) => {
  try {
    const walletuser = await db.create({
      fullname: req.body.fullname,
      email: req.body.email,
      phonenumber: req.body.phonenumber,
      nationalid: req.body.nationalid,
      country: req.body.country,
      meansofnationalidentity: req.body.meansofnationalidentity,
      wrongpinattempts:req.body.wrongpinattempts,
      status: req.body.status,
      deleted: false,
    });
    res.status(201).json({
      success: true,
      status: "Added a wallet user successfully. ",
      data: walletuser,
    });
  } catch (err) {
    if (err)
      return res.json({
        success: false,
        errors: "Failed To Add New Wallet User",
      });

    next(err);
  }
};

exports.getWalletUserById = async (req, res, next) => {
  try {
    await db.findById({ _id: req.params.id }).then((data) => {
      res.status(200).json({
        success: true,
        status: "Retrieved Wallet User By ID Successfully.",
        data: data,
      });
    });
  } catch (err) {
    if (err)
      return res.json({
        success: false,
        errors: "Failed To Get Wallet User By ID",
      });
  }
};

exports.getAllWalletUsers = async (req, res, next) => {
  try {
    await db.find().then((data) => {
      res.status(200).json({
        success: true,
        status: "Retrieved All Wallet Users Successfully.",
        data: data,
      });
    });
  } catch (err) {
    if (err)
      return res.json({
        success: false,
        errors: "Failed To Get All Wallet Users",
      });
  }
};

exports.deleteWalletUser = async (req, res, next) => {
  let deleteWalletUser = {
    deleted: true,
  };
  try {
    db.findByIdAndDelete({ _id: req.params.id }, deleteWalletUser).then(() => {
      res.status(200).json({
        success: true,
        status: "Wallet User Deleted Successfully!",
      });
    });
  } catch (err) {
    if (err)
      return res.json({
        success: false,
        errors: "Failed To Delete a Wallet User",
      });
  }
};

exports.getAllDeletedWalletUsers = async (req, res, next) => {
  try {
    db.find()
      .where("deleted")
      .equals(true)
      .then((data) => {
        res.status(200).json({
          success: "true",
          status: "Retrieved All Deleted Wallet User Accounts!",
          data: data,
        });
      });
  } catch (err) {
    if (err)
      return res.json({
        success: false,
        errors: "Failed To Get All Deleted Wallet Users",
      });
  }
};
