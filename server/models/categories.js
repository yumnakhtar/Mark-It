module.exports = function(sequelize, DataTypes) {
    var Categories = sequelize.define("Categories", {
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

  Categories.associate = function(models) {
    // When a Category is deleted, also delete any associated Bookmarks
    Categories.hasMany(models.Subcategories, {
      onDelete: "cascade"
    }),
    Categories.hasMany(models.Bookmarks, {
        onDelete: "cascade"
    }),
    Categories.belongsTo(models.Users, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Categories;
};
  