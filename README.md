# 🛒 Grocery Shop Management API

This Node.js project provides a backend system for user authentication, profile management, and grocery shop registration using PostgreSQL.

Users can:
- Sign up and log in securely
- Manage their profile
- Register and manage grocery shop details

---

## 🚀 Installation

Follow these steps to run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/Sudharsanbs/GroceryNode.git
cd GroceryNode
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up PostgreSQL Database

- Make sure PostgreSQL is installed and running.
- Create a new database, e.g., `grocery`.

### 4. Configure Environment Variables

Create a `.env` file at the root level of the project (same level as `app.js`), and paste the following content:

```env
# Database Configuration
DB_HOST="127.0.0.1"
DB_USER="postgres"            # your DB username
DB_PASSWORD="postgres"        # your DB password
DB_NAME="grocery"             # your DB name
DB_PORT="5432"
DB_DAILECT="postgres"

# Multer Upload Path (IMPORTANT: Replace with your own local path to the uploads folder)
UPLOAD_PATH="C:/Users/PEPA/Documents/GitHub/Grocery/GroceryNode/uploads"
```

📌 **Note:** If you are on Windows, forward slashes `/` or double backslashes `\` are recommended in the path.

### 5. Run Migrations (If any)

If using Knex or similar, run your migration setup (not shown in this repo).

### 6. Start the Application

```bash
npm run dev
```

Your server will be running on:

```
http://localhost:3001
```

---

## 📘 API Documentation

Access the full API collection here:

📄 [Postman Collection](https://documenter.getpostman.com/view/33841304/2sB2qah1WF)

---

## 🔧 Features

- **User Authentication**
  - Sign Up
  - Sign In
- **Profile Management**
  - Update Name, Email, or Password
- **Grocery Shop Management**
  - Add Shop with detailed info (name, contact, address, timings, etc.)

---

## 🗂️ Project Structure

```bash
GroceryNode/
├── app.js               # Main server file
├── .env                 # Environment configuration
├── package.json         # Node dependencies
├── config/
│   └── local.config.js  # DB connection settings
├── dbModels/            # DB Models (if any)
├── controllers/         # Business logic handlers
└── api/routes/          # API routes
```

---

## 🛠️ Built With

- **Node.js** – Backend runtime
- **Express.js** – Web framework
- **PostgreSQL** – Relational database
- **Multer** – For handling file uploads

---

## 🤝 Contributing

Feel free to fork the repo, submit pull requests, or report issues.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).