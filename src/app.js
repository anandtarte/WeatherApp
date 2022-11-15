const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const port = 8000;

//views


//pathing

const staticpath = path.join(__dirname,"../public");

const template_path = path.join(__dirname,"../templates/views");
const partial_path = path.join(__dirname,"../templates/partials");
// console.log(staticpath);

app.set('view engine','hbs');
app.set("views",template_path);
hbs.registerPartials(partial_path);

app.use(express.static(staticpath));

//routing
app.get("/",(req,res)=>{
    res.render('index');
});

app.get("/about",(req,res)=>{   
    res.render('about');
});

app.get("/weather",(req,res)=>{
    res.render("weather");
});

app.get("*",(req,res)=>{
    res.render("404error",{
        errormsg : "Ooooooooooooooooooooooooooooops there is an error"
    });
})


app.listen(port,()=>{
    console.log(`listening on ${port}`);
});