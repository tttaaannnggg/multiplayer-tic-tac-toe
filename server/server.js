const express = require("express");

const server = express();
const PORT = 3000;

server.listen(3000, () => {
  console.log(`Server listening on port ${PORT}`);
});
