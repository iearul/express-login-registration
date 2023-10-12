const db = require("../models");
const EquipmentList = db.equipment_list;
exports.equipmentList = (req, res) => {
    EquipmentList.findAll()
      .then(equipment => {
        res.status(200).send(equipment);
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };
  
  exports.createEquipment = (req, res) => {
    const { name, description, quantity } = req.body;
    EquipmentList.create({
      name,
      description,
      quantity
    })
      .then(equipment => {
        res.status(200).send(equipment);
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };
  
  exports.updateEquipment = (req, res) => {
    const { id, name, description, quantity } = req.body;
    EquipmentList.update(
      {
        name,
        description,
        quantity
      },
      {
        where: {
          id
        }
      }
    )
      .then(equipment => {
        res.status(200).send(equipment);
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };