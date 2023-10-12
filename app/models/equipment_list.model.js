module.exports = (sequelize, Sequelize) => {
    const EquipmentList = sequelize.define("equipment_list", {
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.INTEGER
      }
    });
  
    return EquipmentList;
  };