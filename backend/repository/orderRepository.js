const pool = require("../lib/db");

class OrderRepository {
  static async updateOrderQuantity(id, quantity) {
    const result = await pool.query(
      "UPDATE orders SET quantity = $1 WHERE id = $2 RETURNING *",
      [quantity, id]
    );
    return result.rows[0] || null;
  }

  static async createOrder(customer_id, product_id, quantity) {
    await pool.query(
      "INSERT INTO orders (customer_id, product_id, quantity) VALUES ($1, $2, $3)",
      [customer_id, product_id, quantity]
    );
  }
}

module.exports = OrderRepository;
