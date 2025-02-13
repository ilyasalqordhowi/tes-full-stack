const express = require("express");
const OrderController = require("../controllers/orderController");
const router = express.Router();

router.patch("/:id", OrderController.updateOrderQuantity);

module.exports = router;
