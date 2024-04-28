const ProductModel = require("../../Models/Products/productSchema");

const getProducts = async (req, res) => {
  const { userID } = req.body;

  let filter = { userID };

  let { old, new: newData } = req.query;

  if (old) {
    filter = {
      ...filter,
      createdAt: { $lte: new Date(Date.now() - 10 * 60 * 1000) },
    };
  } else if (newData) {
    filter = {
      ...filter,
      createdAt: { $gt: new Date(Date.now() - 10 * 60 * 1000) },
    };
  }

  try {
    const products = await ProductModel.find(filter);

    res.json({ products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = getProducts;
