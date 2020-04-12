//creating a server/ port  
const express = require("express");
const app = express();
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");


//change PORT number for new projects
//const PORT = process.env.PORT || 3000; 

app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(express.static("public"));


//connecting back in routes to html and api pages
app.use("/api", apiRoutes);  
app.use("/", htmlRoutes);    

app.listen(PORT, function(){
    console.log("Listening on PORT: " + PORT);
