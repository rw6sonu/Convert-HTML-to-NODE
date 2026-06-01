const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.render("index");
})

app.get('/buttons',(req,res)=>{
    res.render("buttons");
})

app.get('/dropdowns',(req,res)=>{
    res.render("dropdowns");
})

app.get('/typography',(req,res)=>{
    res.render("typography");
})

app.get('/basic_elements',(req,res)=>{
    res.render("basic_elements");
})

app.get('/chartjs',(req,res)=>{
    res.render("chartjs");
})

app.get('/basic-table',(req,res)=>{
    res.render("basic-table");
})

app.get('/mdi',(req,res)=>{
    res.render("mdi");
})

app.get('/login',(req,res)=>{
    res.render("login");
})

app.get('/register',(req,res)=>{
    res.render("register");
})

app.get('/error-404',(req,res)=>{
    res.render("error-404");
})

app.get('/error-500',(req,res)=>{
    res.render("error-500");
})

app.get('/documentation',(req,res)=>{
    res.render("documentation");
})


app.listen(8000, () => {
    console.log("Server Running On Port 8000");
});