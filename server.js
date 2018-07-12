// Express Server
const Auth = require("./server/Auth");

const express = require("express");
const app = express();

const port = process.env.PORT || 3000;
const domainOrigin = "http://localhost:8080";

const auth = new Auth();
app.post(auth.getRoute(), (req, res) => {
  res.header("Access-Control-Allow-Origin", domainOrigin);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  auth.setExchangeCode(req.params.code);

  auth.requestToken().then((response) => {
    res.status(200).json(response.data);
  }).catch((error) => {
    res.status(404).json({
      "code": 404,
      "error": error.message
    });
  })
});

app.listen(port, () => console.log(`Started Express Server on port ${port}`));
