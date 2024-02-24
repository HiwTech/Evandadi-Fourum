require("dotenv").config()
const express = require("express");
const app = express();

const port = 5500;

// db connection
const dbConnection = require("./db/dbConfig")


// use router middleware file
const userRouters = require("./routes/userRoute")

// question router middleware file
const questionRouters = require("./routes/questionRoute")

//authentication middleware
const authMiddleware = require("./middleware/authMiddleware");

// json middleware to extract json data
app.use(express.json())

// user routes middleware
app.use("/api/users", userRouters);

// questions routes middleware
app.use("/api/questions", authMiddleware, questionRouters);
// answers routes middleware

async function start(){
try {
  const result = await dbConnection.execute("select'test' ");
  await app.listen(port);
  console.log("database connection established")
  console.log(`listening on ${port}`)
} catch (error) {
  console.log(error.message);
}
}
 start()



