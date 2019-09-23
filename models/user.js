// Export a function that received these parameters:
// sequelize : a reference to the database connection
// DataTypes : Provided by Sequelize, used for defining types
///////////////////////////////////////////////////////////////
module.exports = function ( sequelize, DataTypes ) {
    var User = sequelize.define ("User", {
        email: DataTypes.STRING, 
        password: DataTypes.STRING
    });

    return User;
}