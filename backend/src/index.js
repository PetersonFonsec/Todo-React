require("dotenv").config();
require("./config/mongoose");

const express = require("./config/server");

const PORT = process.env.PORT || 3000;

express.listen(PORT, () => console.log(`server running in port ${PORT}`));
