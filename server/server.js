const path = require('path');
const publicpath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;
var express = require('express')
var app = express()
app.use(express.static(publicpath));
app.listen(port,()=>{
  console.log(`Server is up on port ${port}`);
});
