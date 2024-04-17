const express=require("express");
const app=express();

const portNo=8080;
app.listen(portNo,()=>{
    console.log(`app is listening on the post ${portNo}`);
})

//create the view engine

app.set("view engine","ejs");

//requre the path package to join the static files

const path=require("path");

app.use(express.static(path.join(__dirname,"public/css")))
app.use(express.static(path.join(__dirname,"public/js")))

//now just send the response to home.ejs

app.get("/",(req,res)=>{
    res.render("home.ejs");
})

app.get("/about",(req,res)=>{
    res.render("about.ejs")
})

app.get("/contact",(req,res)=>{
    res.render("contact")
})

app.get("/resume",(req,res)=>{
    res.render("resume.ejs")
})

app.get("/projects",(req,res)=>{
    res.render("projects.ejs")
})