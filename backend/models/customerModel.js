class Customer {
  constructor(id, name, email, phone, deleted_at = null) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.deleted_at = deleted_at;
  }
}

module.exports = Customer;
