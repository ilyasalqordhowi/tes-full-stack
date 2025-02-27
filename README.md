#GETTING STARTED Frontend

1. Clone the repository:

   ```bash
   git clone https://github.com/ilyasalqordhowi/tes-full-stack.git
   cd <project-name>
   ```

2. Run the program in VSCode:
   ```sh
   code .
   ```
3. Install dependencies:
   npm install

4. Run the program:

```sh
  npm run dev
```

#GETTING STARTED Backend

1. Clone the repository:

   ```bash
   git clone https://github.com/ilyasalqordhowi/tes-full-stack.git
   cd <project-name>
   ```

2. Open in VSCode

```sh
  code .
```


3. Menjalankan Database PostgreSQL dengan Docker

```sh
docker run --name postgres_laris -p 54321:5432 -e POSTGRES_PASSWORD=1 -d postgres
```

4. Jalankan Migrasi Database

Untuk mereset dan menjalankan migrasi:

```sh
make migrate:reset
```

5. Run the program

```sh
  node index.js
```

| Parameter       | Type     | Description                        |
| :-------------- | :------- | :--------------------------------- |
| `customers/`    | `POST`   | `create cutomer data`              |
| `customers/:id` | `GET`    | `search for customers based on ID` |
| `customers/:id` | `Delete` | `delete customer data based on ID` |
| `orders/:id`    | `PATCH`  | `edit order data based on ID`      |
