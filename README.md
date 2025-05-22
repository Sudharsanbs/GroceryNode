---

# Node.js Authentication and Profile Management Project

This project demonstrates a basic implementation of user authentication (sign-up and sign-in) along with profile editing functionality using Node.js and PostgreSQL.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/naveda-tech/node-base.git
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up PostgreSQL database:**

   - Make sure you have PostgreSQL installed and running.
   - Create a new database for this project.

4. **Configure database connection:**

   - Navigate to `config/local.config.js`.
   - Update the PostgreSQL database credentials (`username`, `password`, `database`, `host`, `port`) according to your local setup.

   This command will run database migrations using Knex.js to set up the necessary tables.

5. **Start the application:**

   ```bash
   npm start
   ```

   The application should now be running on `http://localhost:3000`.

## Usage

- **Sign Up:** Register a new user with a unique email address and password.
- **Sign In:** Log in using your registered email address and password.
- **Profile Edit:** Update your profile information such as name, email, or password.

## Directory Structure

- `config/`: Contains configuration files.
  - `local.config.js`: Database connection configuration (update credentials here).
- `dbModels/`: Database related files.
- `controllers/`: Controllers for handling business logic.
- `api/routes/`: Express routes for different endpoints.


## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express**: Web application framework for Node.js.
- **PostgreSQL**: Open source relational database.

## Contributing

Feel free to fork this repository, make pull requests, or open issues for any bugs or feature requests.

## License

This project is licensed under the [MIT License](LICENSE).

---
