module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("products", {
      PN: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Cost: {
        type: DataTypes.INTEGER,
        allowNull: true,
            },
      Description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      Quantity: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      MinQuantity: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Supplier: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      Category: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      Name: {
        type: DataTypes.TEXT,
        allowNull: true,
      }
    });
    return Post;
  };
  