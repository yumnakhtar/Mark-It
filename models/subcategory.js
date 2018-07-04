module.exports = function(sequelize, DataTypes) {
    var Subcategory = sequelize.define("Subcategory", {
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
          len: [1,25],
          notEmpty: true
        }
      }
    });

  Subcategory.associate = function(models) {
    // When a Bucket is deleted, also delete any associated Bookmarks
    Subcategory.hasMany(models.Bookmark, {
        onDelete: "cascade"
    }),
    Subcategory.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    }),
    Subcategory.belongsTo(models.Category, {
        foreignKey: {
          allowNull: false
        }
    });
  };

  return Subcategory;
};
  