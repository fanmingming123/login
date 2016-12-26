/**
 * Created by macbook on 2016/11/18.
 */
var express=require("express");
var app=express();
var path=require("path");
var ejs=require("ejs");
var bodyParser=require("body-parser");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname,"public")))
app.use(bodyParser.urlencoded({extended: false}))
require("./config/conf")(app)
app.listen(3000,function(){
    console.log("listen.....3000")
})