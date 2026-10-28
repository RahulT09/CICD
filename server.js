const express = require("express");
const Sum = require("./sum.js");

const app = express();

app.get("/home", (req, res) => {
  res.status(200).json({
    message: "Server has started :)",
  });
});

app.get("/getSum/:a/:b", (req, res) => {
  const { a, b } = req.params;

  res.send({
    ans: Sum(parseInt(a), parseInt(b)),
    // ans: Sum(a,b)
  });
});

app.listen(8000, () => {
  console.log("Server is listening on port 8000");
});
