const jwt2 = require("jsonwebtoken");

const auth2 = (req, res, next) => {
  try {
    // check ac token
    const token2 = req.header("Authorization");
    if (!token2) return res.status(400).json({ msg: "Authentication failed." });

    // validate
    jwt2.verify(token2, process.env.ACCESS_TOKEN2, (err, user2) => {
      if (err) return res.status(400).json({ msg: "Authentication failed." });
      // success
      req.user = user2;
      next();
    });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = auth2;
