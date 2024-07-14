const jwt = require('jsonwebtoken');
const secret = 'supersupersecretkey';
const payload = {
 role: 'postgres',
 exp: Math.floor(Date.now() / 1000) + (60 * 60), // Expires in 1 hour
};
const token = jwt.sign(payload, secret);
console.log(token)