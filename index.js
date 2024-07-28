const express = require("express");
const morgan = require("morgan");
const server = express();
const productRouter = require('./routes/product')
const userRouter = require('./routes/user')


// bodyParser
server.use(express.json());
server.use(morgan("default"));
server.use(express.static("public"));


server.use('/products',productRouter.router)
server.use('/users',userRouter.router)


// This is the end of server
server.listen(8080, () => {
  console.log("Server Started");
});
