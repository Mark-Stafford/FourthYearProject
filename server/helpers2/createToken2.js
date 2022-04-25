const jwt2 = require("jsonwebtoken");

const createToken2 = {
  activation: (payload) => {
    return jwt2.sign(payload, process.env.ACTIVATION_TOKEN2, { expiresIn: "5m" });
  },
  refresh: (payload) => {
    return jwt2.sign(payload, process.env.REFRESH_TOKEN2, { expiresIn: "24h" });
  },
  access: (payload) => {
    return jwt2.sign(payload, process.env.ACCESS_TOKEN2, { expiresIn: "15m" });
  },
};

module.exports = createToken2;
