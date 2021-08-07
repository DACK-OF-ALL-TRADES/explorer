// modules.....................................................
const jwt = require("jsonwebtoken");

// init.....................................................
const secret = "mysecretssshhhhhhh";
const expiration = "2h";

// export.....................................................
module.exports = {
  // token_test.....................................................
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log("Invalid token");
    }

    return req;
  },
  // signup.....................................................
  signToken: function ({ email, username, _id, firstname, lastname }) {
    const payload = { email, username, _id, firstname, lastname };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
