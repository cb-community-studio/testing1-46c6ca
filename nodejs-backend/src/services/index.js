const users = require("./users/users.service.js");
const item = require("./item/item.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(item);
  // ~cb-add-configure-service-name~
};
