const pool = require("../lib/db");

const products = [
  { name: "Laptop Asus ROG", price: 20000000 },
  { name: "iPhone 13 Pro", price: 18000000 },
  { name: "Samsung Galaxy S22", price: 16000000 },
  { name: "Sony PlayStation 5", price: 9000000 },
  { name: "MacBook Air M2", price: 17000000 },
  { name: "Dell XPS 15", price: 22000000 },
  { name: "Nintendo Switch OLED", price: 7000000 },
  { name: "Apple Watch Series 8", price: 6000000 },
  { name: "Xiaomi Mi 11", price: 8000000 },
  { name: "GoPro Hero 11", price: 5500000 },
];

const seedProducts = async () => {
  try {
    for (const product of products) {
      await pool.query("INSERT INTO products (name, price) VALUES ($1, $2)", [
        product.name,
        product.price,
      ]);
    }
    console.log("Seeding products completed.");
  } catch (err) {
    console.error("Error seeding products:", err);
  } finally {
    pool.end();
  }
};

seedProducts();
