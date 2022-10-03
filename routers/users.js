const Router = require("express").Router;
const User = require("../models").user;

const router = new Router();

//get all user
//http :4000/users
router.get("/", async (request, response, next) => {
  try {
    const user = await User.findAll({
      attributes: [
        "id",
        "commercialName",
        "imageUrl",
        "latitude",
        "longitude",
        "isSeller",
      ],
    });
    response.send(user);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
