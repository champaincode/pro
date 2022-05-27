const express = require("express")
const db = require("./db/db")
const app = express()

app.use(express.json())


db.sync({force : true})
.then(()=>{
  console.log('db conectada')
  app.listen(3001, () => {
    console.log('server  on port 3001')
  })
})
.catch((err)=>{
  console.log(err)
});