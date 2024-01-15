const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const router = require("./routes/client/index.route");
const productsRouter = require("./routes/client/products.router");
const database = require("./config/database");

// database
database.connect();

// pug
app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public")); // Cài đặt thư mục public chứa các file tĩnh sẽ được public 

// routes
app.use("/", router);
app.use("/products", productsRouter);


app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});