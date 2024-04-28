const ProductModel = require("../../Models/Products/productSchema");

const deleteProducts = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await ProductModel.findByIdAndDelete(id);

    res
      .status(200)
      .json({ message: "Product deleted successfully", deletedProduct });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = deleteProducts;
