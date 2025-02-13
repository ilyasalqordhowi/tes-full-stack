const CustomerRepository = require("../repository/customerRepository");

class CustomerController {
  static async createCustomer(req, res) {
    try {
      const { name, email, phone } = req.body;
      const customer = await CustomerRepository.createCustomer(
        name,
        email,
        phone
      );
      res.status(201).json({ success: true, data: customer });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async getCustomerDetail(req, res) {
    try {
      const { id } = req.params;
      const customer = await CustomerRepository.getCustomerById(id);
      if (!customer)
        return res.status(404).json({ error: "Customer not found" });
      res.json({ success: true, data: customer });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async deleteCustomer(req, res) {
    try {
      const { id } = req.params;
      await CustomerRepository.softDeleteCustomer(id);
      res.json({ success: true, message: "Customer deleted (soft delete)" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = CustomerController;
