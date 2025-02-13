CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(50),
    deleted_at TIMESTAMP DEFAULT NULL
);