# Full Stack Food Ordering Web Application

This Full Stack Food Ordering Web Application project is designed to streamline the process of ordering food online. It includes three main components: frontend, backend, and admin panel. Below are the commands to start each part of the project:

### Starting the Backend Server
To start the backend server, run the following command:
```bash
npm run server
```
This command will initiate the backend server, allowing users to interact with the database and perform various operations.

### Starting the Frontend
To start the frontend server, run the following command:
```bash
npm run dev
```
This command will start the frontend application, providing users with an interface to browse food items, add them to their cart, and place orders.

### Starting the Admin Panel
To start the admin panel, run the following command:
```bash
npm run dev
```
This command will launch the admin panel, where administrators can manage orders, update order statuses, add new food items, and monitor the platform's performance.

### Installation Instructions
To set up and run the project locally, follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/your-username/food-ordering-web-app.git
```
2. Navigate to the project directory:
```bash
cd food-ordering-web-app
```
3. Install the dependencies:
```bash
npm install
```

### Access URLs
After starting the servers, you can access the following URLs in your web browser:

- **Frontend**: http://localhost:5174
- **Admin Panel**: http://localhost:5173
- **Backend**: http://localhost:4000

These URLs will allow you to access the respective components of the Food Ordering Web Application locally on your machine.

### Technologies Used

#### Frontend
- React JS: Frontend framework for building the user interface.
- React Router DOM: Library for handling routing in the frontend application.
- Axios: Library for making HTTP requests to the backend server.

#### Backend
- Express: Backend framework for building the server.
- MongoDB: NoSQL database used for storing application data.
- Mongoose: MongoDB object modeling tool for Node.js.
- JSON Web Token (JWT): Library for generating and verifying authentication tokens.
- Bcrypt: Library for hashing passwords for secure storage.
- Cors: Middleware for enabling Cross-Origin Resource Sharing (CORS) in the backend.
- Dotenv: Library for loading environment variables from a .env file.
- Body-parser: Middleware for parsing incoming request bodies.
- Multer: Middleware for handling file uploads.
- Stripe: Payment processing platform for handling online payments.
- Validator: Library for data validation.
- Nodemon: Utility for automatically restarting the server during development.

#### Admin Panel
- React JS: Frontend framework for building the user interface.
- React Router DOM: Library for handling routing in the frontend application.
- Axios: Library for making HTTP requests to the backend server.
- Toastify: Library for displaying toast notifications in the admin panel.

This project combines a variety of technologies to create a comprehensive solution for online food ordering. It provides users with a seamless experience for browsing menus, placing orders, and managing their accounts, while administrators have access to tools for overseeing and managing the platform's operations.

### Contributing
Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request with your changes.
