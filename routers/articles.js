const Router = require("express").Router;
const Product = require("../models").article;
const Offer = require("../models").offer;
const authMiddleware = require("../auth/middleware");

const router = new Router();

//get all article
//http :4000/articles
router.get("/", async (request, response, next) => {
  try {
    const article = await Product.findAll();
    response.send(article);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//get one article by :id with params
//http :4000/articles/3
router.get("/:id", async (req, res, next) => {
  try {
    // 1. req.params.id;
    const articleId = req.params.id;
    // 2. findByPk => id
    const theProduct = await Product.findByPk(articleId);
    res.send(theProduct);
  } catch (e) {
    next(e);
  }
});

// Create a new offer
// http POST :4000/articles/offers email=g@g.com amount=15 userId=1 articleId=1 maxOffer=20
// axios.post("/offers", { email: "g@g.com", amount: "", userId: "", articleId: "" });
router.post("/offers", authMiddleware, async (req, res, next) => {
  try {
    //  email, amount, userId, articleId => frontend
    const { email, amount, userId, articleId, maxOffer } = req.body;
    const accepted = false;

    if (maxOffer >= amount) {
      res.status(400).send("Offer to low!");
    }

    const newOffer = await Offer.create({
      email,
      accepted,
      amount,
      userId,
      articleId,
    });
    res.send(newOffer);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//update Product availiblity and Offer status
//http PATCH :4000/articles/2 offerId=3
router.patch("/:id", async (req, res, next) => {
  try {
    //1. get the id from the params
    const { id } = req.params;
    //1.1 get the info from the body
    const { offerId } = req.body;
    //2. find the user to update
    const articleToUpdate = await Product.findByPk(id);
    const offerToUpdate = await Offer.findByPk(offerId);

    const accepted = true;
    const available = false;

    if (!offerToUpdate) {
      res.status(404).send("Product not found");
    }
    //3. update the user
    const updatedProduct = await articleToUpdate.update({
      available,
    });
    const updatedOffer = await offerToUpdate.update({
      accepted,
    });
    //4. send a response
    res.send(updatedProduct);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

// Create a new article
// http POST :4000/articles/post title=dfadfssddf available=true price=555 bedrooms=1 imageUrl="https://i.pinimg.com/originals/3e/72/2d/3e722d03386698bc895bd19221bf097a.jpg" userId=2
// axios.post("/articles/post", { title: 'Matias', email: 'm@m.com' });
router.post("/post", authMiddleware, async (req, res, next) => {
  try {
    const available = true;
    const { title, price, bedrooms, imageUrl, userId } = req.body;
    const newProduct = await Product.create({
      title,
      available,
      price,
      bedrooms,
      imageUrl,
      userId,
    });
    res.send(newProduct);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
