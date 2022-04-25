const sendMail2 = require("../helpers2/sendMail2");
const createToken2 = require("../helpers2/createToken2");
const validateEmail = require("../helpers2/validateEmail");
const bcrypt2 = require("bcryptjs");
const jwt2 = require("jsonwebtoken");
const User2 = require("../models/userModel2");
const { google } = require("googleapis");
const { OAuth2 } = google.auth;
const cors = require('cors');


const userController2 = {
  register: async (req, res) => {
    try {
      // get info
      const { name, email, password } = req.body;

      // check fields
      if (!name || !email || !password)
        return res.status(400).json({ msg: "Please fill in all fields." });

      // check email
      if (!validateEmail(email))
        return res
          .status(400)
          .json({ msg: "Please enter a valid email address." });

      // check user
      const user2 = await User2.findOne({ email });
      if (user2)
        return res
          .status(400)
          .json({ msg: "This email is already registered in our system." });

      // check password
      if (password.length < 6)
        return res
          .status(400)
          .json({ msg: "Password must be at least 6 characters." });

      // hash password
      const salt = await bcrypt2.genSalt();
      const hashPassword = await bcrypt2.hash(password, salt);

      // create token
      const newUser2 = { name, email, password: hashPassword };
      const activation_token2 = createToken2.activation(newUser2);

      // send email
      const url = `http://localhost:3000/api/auth2/activate2/${activation_token2}`;
      sendMail2.sendEmailRegister2(email, url, "Verify your email");

      // registration success
      res.status(200).json({ msg: "Welcome! Please check your email." });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  activate: async (req, res) => {
    try {
      // get token
      const { activation_token2 } = req.body;

      // verify token
      const user2 = jwt2.verify(activation_token2, process.env.ACTIVATION_TOKEN2);
      const { name, email, password } = user2;

      // check user
      const check2 = await User2.findOne({ email });
      if (check2)
        return res
          .status(400)
          .json({ msg: "This email is already registered." });

      // add user
      const newUser2 = new User2({
        name,
        email,
        password,
      });
      await newUser2.save();

      // activation success
      res
        .status(200)
        .json({ msg: "Your account has been activated, you can now sign in." });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  signing: async (req, res) => {
    try {
      // get cred
      const { email, password } = req.body;

      // check email
      const user2 = await User2.findOne({ email });
      if (!user2)
        return res
          .status(400)
          .json({ msg: "This email is not registered in our system." });

      // check password
      const isMatch2 = await bcrypt2.compare(password, user2.password);
      if (!isMatch2)
        return res.status(400).json({ msg: "This password is incorrect." });

      // refresh token
      const rf_token2 = createToken.refresh({ id: user2._id });
      res.cookie("_apprftoken", rf_token2, {
        httpOnly: true,
        path: "/api/auth2/access2",
        maxAge: 24 * 60 * 60 * 1000, // 24h
      });

      // signing success
      res.status(200).json({ msg: "Signing success", user2 });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  access: async (req, res) => {
    try {
      // rf token
      const rf_token2 = req.cookies._apprftoken;
      if (!rf_token2) return res.status(400).json({ msg: "Please sign in." });

      // validate
      jwt2.verify(rf_token2, process.env.REFRESH_TOKEN2, (err, user2) => {
        if (err) return res.status(400).json({ msg: "Please sign in again." });
        // create access token
        const ac_token2 = createToken.access({ id: user2.id });
        // access success
        return res.status(200).json({ ac_token });
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  forgot: async (req, res) => {
    try {
      // get email
      const { email } = req.body;

      // check email
      const user2 = await User2.findOne({ email });
      if (!user2)
        return res
          .status(400)
          .json({ msg: "This email is not registered in our system." });

      // create ac token
      const ac_token2 = createToken.access({ id: user2.id });

      // send email
      const url = `http://localhost:3000/auth/reset-password2/${ac_token2}`;
      const name = user2.name;
      sendMail2.sendEmailReset2(email, url, "Reset your password", name);

      // success
      res
        .status(200)
        .json({ msg: "Re-send the password, please check your email." });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  reset: async (req, res) => {
    try {
      // get password
      const { password } = req.body;

      // hash password
      const salt = await bcrypt2.genSalt();
      const hashPassword = await bcrypt2.hash(password, salt);

      // update password
      await User2.findOneAndUpdate(
        { _id: req.user2.id },
        { password: hashPassword }
      );

      // reset success
      res.status(200).json({ msg: "Password was updated successfully." });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  info: async (req, res) => {
    try {
      // get info -password
      const user2 = await User2.findById(req.user2.id).select("-password");
      // return user
      res.status(200).json(user2);
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  update: async (req, res) => {
    try {
      // get info
      const { name } = req.body;

      // update
      await User2.findOneAndUpdate({ _id: req.user2.id }, { name });
      // success
      res.status(200).json({ msg: "Update success." });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  signout: async (req, res) => {
    try {
      // clear cookie
      res.clearCookie("_apprftoken", { path: "/api/auth2/access" });
      // success
      return res.status(200).json({ msg: "Signout success." });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  google: async (req, res) => {
    try {
      // get Token Id
      const { tokenId } = req.body;

      // verify Token Id
      const client = new OAuth2(process.env.G_CLIENT_ID);
      const verify = await client.verifyIdToken({
        idToken: tokenId,
        audience: process.env.G_CLIENT_ID,
      });

      // get data
      const { email_verified, email, name, picture } = verify.payload;

      // failed verification
      if (!email_verified)
        return res.status(400).json({ msg: "Email verification failed." });

      // passed verification
      const user2 = await User2.findOne({ email });
      // 1. If user exist / sign in
      if (user2) {
        // refresh token
        const rf_token2 = createToken.refresh({ id: user2._id });
        // store cookie
        res.cookie("_apprftoken", rf_token2, {
          httpOnly: true,
          path: "/api/auth2/access",
          maxAge: 24 * 60 * 60 * 1000, // 24hrs
        });
        res.status(200).json({ msg: "Signing with Google success." });
      } else {
        // new user / create user
        const password = email + process.env.G_CLIENT_ID;
        const salt = await bcrypt2.genSalt();
        const hashPassword = await bcrypt2.hash(password, salt);
        const newUser2 = new User2({
          name,
          email,
          password: hashPassword,
          imagerep: picture,
        });
        await newUser2.save();
        // sign in the user
        // refresh token
        const rf_token2 = createToken2.refresh({ id: user2._id });
        // store cookie
        res.cookie("_apprftoken", rf_token2, {
          httpOnly: true,
          path: "/api/auth2/access",
          maxAge: 24 * 60 * 60 * 1000, // 24hrs
        });
        // success
        res.status(200).json({ msg: "Signing with Google success." });
      }
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = userController2;
