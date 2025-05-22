---

# Node.js Authentication and Profile Management Project

This project lets users sign up, log in, and manage their profile. After logging in, users can register their grocery shop by filling in shop details. The backend is built with Node.js and PostgreSQL,

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Sudharsanbs/GroceryNode.git
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

5. **Create a .env file at the root level of your project (the same level as app.js).**

   - This ensures environment variables are properly loaded when your app runs. Example structure:

       - project-folder/
         ├── app.js
         ├── .env
         ├── package.json
         └── ...
    - .env 
      # Database Configuration
        DB_HOST="127.0.0.1" 
        DB_USER="postgres" # your db user name
        DB_PASSWORD="postgres" # your db password
        DB_NAME="grocery" # your db name
        DB_PORT="5432" # your db port 
        DB_DAILECT="postgres" # your Db DaiLect

       # Multer Upload Path (IMPORTANT: Replace with your own local path to the uploads folder)
         UPLOAD_PATH="C:/Users/PEPA/Documents/GitHub/Grocery/GroceryNode/uploads"
         # You can copy this line directly and paste it into your .env file. Just ensure the path exists on your machine. If you're on Windows, the backslashes (\) are not needed in .env files — forward slashes (/) or escaped backslashes (\\) work safely.


6. **Start the application:**

   ```bash
   npm run start
   ```

   The application should now be running on `http://localhost:3001`.
7. ** Post Document Url:**

      - URL - https://documenter.getpostman.com/view/33841304/2sB2qah1WF
## Usage

- **Sign Up:** Register a new user with a unique email address and password.
- **Sign In:** Log in using your registered email address and password.
- **Profile Edit:** Update your profile information such as name, email, or password.
- **Shop :** Creating  your Shop information .


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
