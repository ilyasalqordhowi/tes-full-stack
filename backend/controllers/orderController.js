const OrderRepository = require("../repository/orderRepository");

class OrderController {
  static async updateOrderQuantity(req, res) {
    try {
      const { id } = req.params;
      const { quantity } = req.body;
      const order = await OrderRepository.updateOrderQuantity(id, quantity);
      if (!order) return res.status(404).json({ error: "Order not found" });
      res.json(order);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = OrderController;
