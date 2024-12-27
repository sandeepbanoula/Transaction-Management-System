var jwt = require("jsonwebtoken");

const tokenGenerator = async (username: String) => {
  const payload = {
    iat: Math.floor(Date.now() / 1000) - 30,
    user: username,
  };
  var token = await jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });
  return token;
};

export default tokenGenerator;