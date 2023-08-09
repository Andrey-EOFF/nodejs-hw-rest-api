const { User } = require("./user");
const { authSchema, loginSchema, emailSchema } = require("./user");

module.exports = {
  User,
  authSchema,
  loginSchema,
  emailSchema,
};
