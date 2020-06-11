const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded(
  { extended: true }
));

app.use(express.static("public"));

mongoose.connect("mongodb+srv://admin-mustaqim:Mustaqim98@cluster0-lbgkh.mongodb.net/productDB?retryWrites=true&w=majority", {useNewUrlParser: true});

const productSchema = {
    productid: String,
    producturl: String,
    producttitle: String,
    productsubtitile: String,
    productprice: String
}

const Man = mongoose.model("Man", productSchema);
const Woman = mongoose.model("Woman", productSchema);
const Home = mongoose.model("Home", productSchema);
const Tech = mongoose.model("Tech", productSchema);
const Lifestyle = mongoose.model("Lifestyle", productSchema);


app.get("/", function (req, res) {
    res.render("index");
});







app.listen(3000, function () {
    console.log("Server is running on port 3000");
});
