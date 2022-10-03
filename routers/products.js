const Router = require("express").Router;
const Product = require("../models").product;
const Offer = require("../models").offer;
const authMiddleware = require("../auth/middleware");

const router = new Router();

//get all product
//http :4000/products
router.get("/", async (request, response, next) => {
  try {
    const product = await Product.findAll({ include: Offer });
    response.send(product);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//get one product by :id with params
//http :4000/products/3
router.get("/:id", async (req, res, next) => {
  try {
    // 1. req.params.id;
    const productId = req.params.id;
    // 2. findByPk => id
    const theProduct = await Product.findByPk(productId, { include: Offer });
    res.send(theProduct);
  } catch (e) {
    next(e);
  }
});

// Create a new offer
// http POST :4000/products/offers email=g@g.com amount=15 userId=1 productId=1 maxOffer=20
// axios.post("/offers", { email: "g@g.com", amount: "", userId: "", productId: "" });
router.post("/offers", authMiddleware, async (req, res, next) => {
  try {
    //  email, amount, userId, productId => frontend
    const { email, amount, userId, productId, maxOffer } = req.body;
    const accepted = false;

    if (maxOffer >= amount) {
      res.status(400).send("Offer to low!");
    }

    const newOffer = await Offer.create({
      email,
      accepted,
      amount,
      userId,
      productId,
    });
    res.send(newOffer);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//update Product availiblity and Offer status
//http PATCH :4000/products/2 offerId=3
router.patch("/:id", async (req, res, next) => {
  try {
    //1. get the id from the params
    const { id } = req.params;
    //1.1 get the info from the body
    const { offerId } = req.body;
    //2. find the user to update
    const productToUpdate = await Product.findByPk(id);
    const offerToUpdate = await Offer.findByPk(offerId);

    const accepted = true;
    const available = false;

    if (!offerToUpdate) {
      res.status(404).send("Product not found");
    }
    //3. update the user
    const updatedProduct = await productToUpdate.update({
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

// Create a new product
// http POST :4000/products/post title=dsfas price=1526 imageUrl="https://www.milieucentraal.nl/media/v2enis15/duurzaam-vervoer-kleine-auto-elektrische-auto-straatbeeld-2.jpg?anchor=center&mode=crop&width=1200&height=630&rnd=132505896649600000&quality=70" userId=2 category=toys
// axios.post("/products/post", { title: 'Matias', email: 'm@m.com' });
router.post("/post", authMiddleware, async (req, res, next) => {
  try {
    const { title, price, imageUrl, userId, category } = req.body;
    const available = true;
    const quantity = 1;
    const newProduct = await Product.create({
      title,
      price,
      imageUrl,
      userId,
      category,
      available,
      quantity,
    });
    res.send(newProduct);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;

//http DELETE :4000/products/1
// Feature 5 - Criteria 5 - The request uses JWT authorization
router.delete("/:productId", async (req, res, next) => {
  try {
    //1.get the id from the params
    const { userId, productId } = req.params;

    console.log("All good", req.headers.authorization);
    //2. find what you want to delete
    const productToDelete = await Product.findByPk(productId);
    //3. If story not found sen error message
    if (!productToDelete) {
      return res.status(404).send("Product not found");
    }
    //4. Check if this user is the owner of the space
    // if (productToDelete.space.userId !== req.user.id) {
    //   return res.status(401).send("You're not authorized to delete this story");
    // }
    //5. Destroy story
    await productToDelete.destroy();
    //6. Send message confirmating deletion
    res.send({ message: "Element deleted", productId });
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});
