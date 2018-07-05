var Sequelize = require("sequelize");

var uuidv1  = require('uuid/v1');

var bcrypt  = require('bcrypt');


module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define("Users", {

        uuid: {
          primaryKey: true,
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV1,
          isUnique :true
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            isUnique :true,
            validate: {
                isEmail: true,
                min: 4,
                notEmpty:true
            }
        },

        local_pw: {
            type: DataTypes.STRING,
            required: true,
            validate: {
                min:6,
                notEmpty:true
            }
        },

        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE

    });
    // methods ======================
      // generating a hash
    Users.generateHash = function(password) {
      return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    };

    // checking if password is valid
    Users.prototype.validPassword = function(password) {
      return bcrypt.compareSync(password, this.local_pw);
    }

    // Users.associate = function(models){
    //     Users.hasOne(models.Account, {
    //         foreignKey: "accountUUID",
    //         onDelete: "cascade"
    //     });
    // };

    Users.associate = function(models) {
      Users.hasMany(models.Categories, {
        onDelete: "cascade"
      }),
      Users.hasMany(models.Subcategories, {
       onDelete: "cascade"
     }),
      Users.hasMany(models.Bookmarks, {
       onDelete: "cascade"
     });

    };


    return Users;
}
