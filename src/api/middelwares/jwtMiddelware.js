// middleware/authenticate.js
const jwt = require('jsonwebtoken');

const authenticateUser = (req, res, next) => {
  // Get the token from the request headers
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized - Token not provided' });
  }

  // Verify the token
  jwt.verify(token, 'your_secret_key', (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Unauthorized - Invalid token' });
    }

    // Attach the user information to the request for further use
    req.user = decoded;

    // Continue to the next middleware or route handler
    next();
  });
};

module.exports = { authenticateUser };
