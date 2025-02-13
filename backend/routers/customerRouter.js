const express = require("express");
const CustomerController = require("../controllers/customerController");
const router = express.Router();

router.post("/", CustomerController.createCustomer);
router.get("/:id", CustomerController.getCustomerDetail);
router.delete("/:id", CustomerController.deleteCustomer);

module.exports = router;
