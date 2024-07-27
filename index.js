const fs = require("fs");

const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;
// Create a local server to receive data from

const express = require("express");
const morgan = require('morgan')

// This is the start of the server
const server = express();
server.use(express.json())
// server.use(express.urlencoded())
server.use(morgan('default'))
server.use(express.static('public'))
// We can call these "API" , "ENDPOINT" , "ROUTE"
//API ROOT , Base URL , example - google.com/api/v2/

// Create POST /products      C R U D
server.post("/products",(req, res) => {
  console.log(req.body)
  products.push(req.body)
  res.status(201).json(req.body);
});


// READ  GET Products
server.get("/products",(req, res) => {
  res.json(products);
});
// READ GET /products/:id
server.get("/products/:id",(req, res) => {
  const id = +req.params.id
  const product =  products.find(p=>p.id===id)
  res.json(product);
});

// UPDATE PUT /products/:id
server.put("/products/:id",(req, res) => {
  const id = +req.params.id
  const productIndex =  products.findIndex(p=>p.id===id)
  products.splice(productIndex,1,{...req.body,id:id})
  res.status(201).json()
});
// Only the selected properties will be updated (Not All The Data Will BE OverRited)
server.patch("/products/:id",(req, res) => {
  const id = +req.params.id
  const productIndex =  products.findIndex(p=>p.id===id)
  const product = products[productIndex]
  products.splice(productIndex,1,{...product,...req.body})
  res.status(201).json()
});


// DELETE Delete  /products/:id
server.delete("/products/:id",(req, res) => {
  const id = +req.params.id
  const productIndex =  products.findIndex(p=>p.id===id)
  const product = products[productIndex]
  products.splice(productIndex,1)
  res.status(201).json(product)
});


// This is the end of server
server.listen(8080, () => {
  console.log("Server Started");
});
