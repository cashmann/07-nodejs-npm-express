'use strict';

//TODO: Finish out the server code according to the instructions in the lab README

const express = require('express');
const PORT = process.env.PORT || 3000;

const app = (express());

app.use(express.static('./public'));



// REVIEW: POST route needs to parse the body passed in with the request.
// POST middleware
app.use(express.urlencoded({ extended: true }));

app.post('/articles', (request, response) => {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.status(201).json(request.body);
});

app.get('/new', (req,res)=>{
  res.sendFile('new.html', {root: './public'});
});

app.get('*', (req,res)=>{
  res.status(404);
  res.send("FUCK. I can't find this shit.");
});

app.listen(PORT, () => {
  console.log(PORT);
});