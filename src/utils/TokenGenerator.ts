var jwt = require("jsonwebtoken");

// JWT token generator
const tokenGenerator = async (username: String, pass: String) => {
  const payload = {
    iat: Math.floor(Date.now() / 1000) - 30,
    user: username,
    password: pass
  };
  var token = await jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });
  return token;
};

export default tokenGenerator;
