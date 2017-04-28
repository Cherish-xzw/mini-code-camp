const Sequelize = require('sequelize');

module.exports = new Sequelize('mysql://root:policeman@115.159.189.135/db_mini_code_camp', {
  define: {
    timestamps: false
  }
});
