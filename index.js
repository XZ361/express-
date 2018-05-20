var express=require("express");
var app=express();
var controller=require("./controllers/controller.js");
//罗列中间件

//配置模板引擎,此时express将自动帮你引入ejs模板
app.set("view engine","ejs");
//路由表,中间件
app.get("/",controller.showIndex);
app.get("/:number",controller.showRes);

//配置静态资源文件，将public文件夹静态出来
app.use(express.static("public"));
app.listen(3000);
console.log("Server is starting at port 3000");