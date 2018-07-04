module.exports = function(sequelize, DataTypes) {
    var Subcategories = sequelize.define("Subcategories", {
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

  Subcategories.associate = function(models) {
    // When a Bucket is deleted, also delete any associated Bookmarks
    Subcategories.hasMany(models.Bookmarks, {
        onDelete: "cascade"
    }),
    Subcategories.belongsTo(models.Users, {
      foreignKey: {
        allowNull: false
      }
    }),
    Subcategories.belongsTo(models.Categories, {
        foreignKey: {
          allowNull: false
        }
    });
  };

  return Subcategories;
};
  