
// const express = require('express')
// const app = express()
const mongoose = require('mongoose');
require('dotenv/config');
import Blog from './model/blog'



mongoose.connect(process.env.DBCONNECTION, { useNewUrlParser: true }, () => {
    console.log("connected to db!")
})



// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))

// app.get('/', function (req, res) {
//   res.send('Test successful')
// })

// export default {
//   path: '/api',
//   handler: app
// }


export default function handler(request, response) {
  const { name } = request.query;

  const testArticle = new Blog({
  title: request.query,
  slug: 'test',
  published: true
});

testArticle.save();

  response.end(`Hello ${name}!`);
}