const { authJwt } = require("../middleware");
const userController = require("../controllers/user.controller");
const equipmentController = require("../controllers/equipment.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", userController.allAccess);

  app.get(
    "/api/test/user",
    [authJwt.verifyToken],
    userController.userBoard
  );

  app.get(
    "/api/test/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    userController.moderatorBoard
  );

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    userController.adminBoard
  );
  app.post(
    "/api/equipment",
    [authJwt.verifyToken, authJwt.isAdmin],
    equipmentController.createEquipment
  );
  app.put(
    "/api/equipment",
    [authJwt.verifyToken, authJwt.isAdmin],
    equipmentController.updateEquipment
  );
  app.get(
    "/api/equipment",
    [authJwt.verifyToken, authJwt.isAdmin],
    equipmentController.equipmentList
  );
};
