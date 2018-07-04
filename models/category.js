module.exports = function(sequelize, DataTypes) {
    var Category = sequelize.define("Category", {
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

  Category.associate = function(models) {
    // When a Category is deleted, also delete any associated Bookmarks
    Category.hasMany(models.Subcategory, {
      onDelete: "cascade"
    }),
    Category.hasMany(models.Bookmark, {
        onDelete: "cascade"
    }),
    Category.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Category;
};
  