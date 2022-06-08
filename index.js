const mongoose = require("mongoose");
const express = require('express');
const port = 8000;
const connectionString = "mongodb+srv://<username>:<password>@<cluster>.koblycg.mongodb.net/?retryWrites=true&w=majority"
const app = express();
app.use(express.json());

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log("Connected to Database");
}).catch(error => console.error(error))

app.listen(port, () => {
  console.log('Listening on ' + port)
})

const blogRouter = require("./routes/blogRoute.js");
app.use('/blogs', blogRouter)
