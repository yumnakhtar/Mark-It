module.exports = function (sequelize, DataTypes) {
    var Bookmarks = sequelize.define("Bookmarks", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 25],
          notEmpty: true
        }
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          isURL: true
        }
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 200],
          notEmpty: true
        }
      }
    });
  
  
    Bookmarks.associate = function (models) {
      // A Bookmarks can't be created without an bucket due to the foreign key constraint
      Bookmarks.belongsTo(models.Categories, {
        foreignKey: {
          allowNull: false
        }
      }),
      Bookmarks.belongsTo(models.Subcategories, {
        foreignKey: {
          allowNull: false
        }
      }),
      Bookmarks.belongsTo(models.Users, {
        foreignKey: {
          allowNull: false
        }
      })
    };
  
  
    return Bookmarks;
  };