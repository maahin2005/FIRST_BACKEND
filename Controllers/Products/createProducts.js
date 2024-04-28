const ProductModel = require("../../Models/Products/productSchema");

const createProducts = async (req, res) => {
  const { title, price, userID, username } = req.body;

  try {
    const product = new ProductModel({ title, price, userID, username });

    product.save();

    res.status(200).json({ msg: "Product saved successfully.", product });
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
};

module.exports = createProducts;
