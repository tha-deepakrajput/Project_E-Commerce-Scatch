const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");

const db = require("./config/mongooseConnection");
const ownersRouter = require("./routes/ownersRouter");
const productsRouter = require("./routes/productsRouter");
const usersRouter = require("./routes/usersRouter");

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

//Routes
app.use("/owners", ownersRouter);
app.use("/products", productsRouter);
app.use("/users", usersRouter);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));