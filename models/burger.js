// Export a function that receives these parameters:
// sequelize : a reference to the database connection
// DataTypes : Provided by Sequelize, used for defining types
///////////////////////////////////////////////////////////////
module.exports = function ( sequelize, DataTypes ) {
    var Burger = sequelize.define ("Burger", 
    {
        burger_name : { 
                        type      : DataTypes.STRING,
                        validate  : 
                        {
                            notNull : false,
                            notEmpty  : 
                            { 
                                args : true, 
                                msg  : 'The burger name cannot be empty' 
                            },
                        }
                      },
        devoured    : DataTypes.BOOLEAN, 
        createdAt   : { type : DataTypes.DATE,
                        get: function() {
                        return moment.utc(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss z')
            }
         }, 
        updatedAt   : { type : DataTypes.DATE,
                        get: function() {
                          return moment.utc(this.getDataValue('updatedAt')).format('YYYY-MM-DD HH:mm:ss z')
                        }
                      } 
    });

    return Burger;
}