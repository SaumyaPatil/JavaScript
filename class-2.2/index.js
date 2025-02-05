//importing express library written in node package registry
//difference between fs lib and express lib is that fs lib comes built in with nodejs and we just have to require it but with express, we have to bring it to our system from internet
//command used to bring express to our machine is npm install express
//else we wouldnt have the access to express code locally

const express = require('express')
const app = express()   //This returns something on which we write the requests below
const port = 3000 //The server is listening on port 3000

//the first arguement of get function is the route at which the request will hit the server.
app.get('/', (req, res) => {     //This callback function will run when anyone will hit your server.
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

