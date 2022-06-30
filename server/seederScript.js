import products from "./data/products.js";
import connectDB from "./config/db.js";
import Product from "./models/Product.js";

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany({});

    await Product.insertMany(products);

    console.log("Product Imported Successfully");
    process.exit();
  } catch (error) {
    console.error("Error Importing");
    process.exit(1);
  }
};

importData();
