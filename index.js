const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const database = require("./config/database");
const routerAdmin = require("./routes/admin/index.router")
const routerClient = require("./routes/client/index.route");
const systemConfig = require("./config/system")


// database
database.connect();

// pug
app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public")); // Cài đặt thư mục public chứa các file tĩnh sẽ được public 

// routes admin
routerAdmin(app);

// routes client
routerClient(app);

// app locals variable
app.locals.prefixAdmin = systemConfig.prefixAdmin; // Để lấy biến có thể dùng ở mọi nơi, ví dụ như trong file pug

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});