class Order {
  constructor(id, customer_id, product_id, quantity, created_at) {
    this.id = id;
    this.customer_id = customer_id;
    this.product_id = product_id;
    this.quantity = quantity;
    this.created_at = created_at;
  }
}

module.exports = Order;
