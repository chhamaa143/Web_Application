
 const { response } = require('express');
const express = require('express');
const pool = require('../model/dbconfig');
const router= express.Router();

router.get('/',(request,response)=>{
  console.log("Inside index route");
  response.render('index.ejs');
});
router.get('/about',(request,response)=>{
console.log("About page");
response.render("about.ejs");

router.get('/login',(request,response)=>{
  console.log("Login page");
  response.render("login.ejs");
});
router.get('/register',(request,response)=>{
     console.log("register page");
    response.render("register.ejs");
  });


  router.post("/register",(request,response)=>{
  pool.getConnection((err,con)=>{
    if(!err)
    //  let sql = "insert into registertable(Email,password) values(?,?)";
     con.query(sql,[request.body.email,request.body.password],(err,con)=>{
       if(err)
        response.send("error");
        else
        response.send("success.");
     });
  });
});
});
module.exports=router;
