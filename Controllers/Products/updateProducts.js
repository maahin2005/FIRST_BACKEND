const ProductModel = require("../../Models/Products/productSchema");

const updateProducts = async (req, res) => {
  const { id } = req.params;
  // const data = req.body

  try {
    const updateProduct = await ProductModel.findByIdAndUpdate(id, req.body);
    console.log(updateProduct);
    res.status(200).json({ msg: "Product updated successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = updateProducts;
