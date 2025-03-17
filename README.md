# Todo App (Node.js + Express + MongoDB)

## 📌 Project Overview
This is a simple **Todo App** built using **Node.js**, **Express**, and **MongoDB**. It provides user authentication, task management, and status updates for todos.

---

## 🚀 Features
- **User Authentication** (Signup, Login, JWT-based Authentication)
- **Todo Management** (Create, Read, Update, Delete)
- **Middleware for Protected Routes**
- **Environment Variables Support (`.env`)**
- **MongoDB Connection with Mongoose**
- **RESTful API Structure**


## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/todo-app.git
cd todo-app
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Setup Environment Variables
Create a `.env` file inside the **src** folder and add:
```
SECRET_KEY=mysecretkey1234
DATABASE_URL=mongodb://localhost:27017/Todo-app
PORT=3000
```

### 4️⃣ Start the Server
```sh
node src/index.js
```
Or using **nodemon** (if installed):
```sh
npx nodemon src/index.js
```
The server should start at: `http://localhost:3000`

---

## 📡 API Endpoints

### **🔹 Authentication**
| Method | Endpoint       | Description      |
|--------|--------------|-----------------|
| POST   | `/auth/signup` | Register a user |
| POST   | `/auth/login`  | Login a user    |

### **🔹 Todo Management**
| Method | Endpoint         | Description               |
|--------|-----------------|---------------------------|
| GET    | `/todos`         | Get all todos            |
| POST   | `/todos`        | Create a new todo        |
| PUT    | `/change-status/:id` | Update todo status     |
| DELETE | `/todos/:id`    | Delete a todo            |

---


---

## ✅ How to Use
1. **Signup** using `/auth/signup`.
2. **Login** to get a JWT token.
3. **Use the token** to access protected routes like `/todos`.
4. **Manage your tasks** (add, update, delete todos).

---

## 🛠 Technologies Used
- **Node.js** (JavaScript runtime)
- **Express.js** (Web framework)
- **MongoDB + Mongoose** (Database)
- **JWT** (Authentication)
- **dotenv** (Environment Variables)

---


## 🌟 Acknowledgments
Special thanks to Open Source communities for amazing resources! 💙

