module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1,50],
          notEmpty: true
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1,60],
          notEmpty: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1,50],
          notEmpty: true
        }
      }
    });

    User.associate = function(models) {
       User.hasMany(models.Category, {
         onDelete: "cascade"
       }),
       User.hasMany(models.Subcategory, {
        onDelete: "cascade"
      }),
       User.hasMany(models.Bookmark, {
        onDelete: "cascade"
      });
    };

    return User;
  };
  