const User = require('./User');
const Journal = require('./Journal');
const Logbook = require('./Logbook');


Journal.belongsTo(User, {
  foreignKey: "user_id", 
});

Logbook.belongsTo(User, {
  foreignKey: "user_id", 
});

module.exports = { User, Journal, Logbook }; 

