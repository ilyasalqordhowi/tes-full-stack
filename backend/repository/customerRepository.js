const pool = require("../lib/db");

class CustomerRepository {
  static async createCustomer(name, email, phone) {
    const result = await pool.query(
      "INSERT INTO customers (name, email, phone) VALUES ($1, $2, $3) RETURNING *",
      [name, email, phone]
    );
    return result.rows[0];
  }

  static async getCustomerById(id) {
    const result = await pool.query("SELECT * FROM customers WHERE id = $1", [
      id,
    ]);
    return result.rows[0] || null;
  }

  static async softDeleteCustomer(id) {
    await pool.query("UPDATE customers SET deleted_at = NOW() WHERE id = $1", [
      id,
    ]);
  }
}

module.exports = CustomerRepository;
