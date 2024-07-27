const fs = require("fs");

const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;
// Create a local server to receive data from

const express = require("express");
const morgan = require('morgan')

// This is the start of the server
const server = express();


// bodyParser
server.use(express.json())
// server.use(express.urlencoded())


server.use(morgan('default'))
// files in the public folder will be excessed 
server.use(express.static('public'))

// This is a middleWare
// We can use this to keep the track of the server log (Data )


// server.use((req, res, next) => {
//   console.log(
//     req.method,
//     req.ip,
//     req.hostname,
//     new Date(),
//     req.get("User-Agent")
//   );
//   next();
// });

// instead of above we can use morgan to keep the track of logs



// This also a middleWare for authentication
const auth = (req, res, next) => {
  // console.log(req.query);

  if (req.body.password==123) {
    next();
  }
  else{
    res.send(401)  
  }
};

// We can use this authentication for all or just for "get" route
// server.use(auth)

// We can call these "API" , "ENDPOINT" , "ROUTE"

// "/products/:id"

server.get("/", auth,(req, res) => {
  res.json({ type: "GET" });
});
server.post("/", auth,(req, res) => {
  res.json({ type: "post" });
});
server.put("/", (req, res) => {
  res.json({ type: "put" });
});
server.delete("/", (req, res) => {
  res.json({ type: "delete" });
});
server.patch("/", (req, res) => {
  res.json({ type: "patch" });
});

server.get("/", (req, res) => {
  // res.send('<h1>Hello</h1>')
  // res.sendFile("D:/Summer 2024/React Practise/Getting_Started_With_NodeJS/index.html")
  // res.json(products)

  res.status(201).send("<h1>Hello World</h1>");
});

// This is the end of server
server.listen(8080, () => {
  console.log("Server Started");
});
