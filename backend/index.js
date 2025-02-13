const express = require("express");
const bodyParser = require("body-parser");
const customerRouter = require("./routers/customerRouter");
const orderRouter = require("./routers/orderRouter");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use("/customers", customerRouter);
app.use("/orders", orderRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
