const users = require('./users');
const registrations = require('./registrations');

module.exports = {
  ...users,
  ...registrations,
};
