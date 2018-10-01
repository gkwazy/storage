module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("products", {
      PN: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Cost: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      Quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      MinQuantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Supplier: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      Category: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      Name: {
        type: DataTypes.TEXT,
        allowNull: false,
      }
    });
    return Post;
  };
  