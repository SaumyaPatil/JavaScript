//importing express library written in node package registry
//difference between fs lib and express lib is that fs lib comes built in with nodejs and we just have to require it but with express, we have to bring it to our system from internet
//command used to bring express to our machine is npm install express
//else we wouldnt have the access to express code locally

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {     //This callback function will run when anyone will hit your server.
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

