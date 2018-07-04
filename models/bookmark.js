module.exports = function (sequelize, DataTypes) {
    var Bookmark = sequelize.define("Bookmark", {
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
      },
      priority: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: true,
          max: 5,
          min: 1
        }
      }
    });
  
  
    Bookmark.associate = function (models) {
      // A Bookmarks can't be created without an bucket due to the foreign key constraint
      Bookmark.belongsTo(models.Category, {
        foreignKey: {
          allowNull: false
        }
      }),
      Bookmark.belongsTo(models.Subcategory, {
        foreignKey: {
          allowNull: false
        }
      }),
      Bookmark.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      })
    };
  
  
    return Bookmark;
  };