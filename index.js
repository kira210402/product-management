const express = require("express");
const dotenv = require("dotenv");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const database = require("./config/database");
const routerAdmin = require("./routes/admin/index.router")
const routerClient = require("./routes/client/index.route");
const systemConfig = require("./config/system")

dotenv.config();
const app = express();

app.use(express.static("public")); // Cài đặt thư mục public chứa các file tĩnh sẽ được public 
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({ extended: false}));

// database
database.connect();

// pug
app.set("views", "./views");
app.set("view engine", "pug");


// routes admin
routerAdmin(app);

// routes client
routerClient(app);

// app locals variable
app.locals.prefixAdmin = systemConfig.prefixAdmin; // Để lấy biến có thể dùng ở mọi nơi, ví dụ như trong file pug

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});