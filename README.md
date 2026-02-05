# 🐛 Bug Tracker

Backend REST API for a Jira-like Bug & Issue Tracking System.
Supports team collaboration, project-based issue tracking, Kanban workflow,
and secure authentication.

---

## 🎯 Features

- User registration & login
- JWT-based authentication & authorization
- Project-based issue tracking
- Create, update, delete bug/issue tickets
- Assign issues to team members
- Kanban workflow (To Do → In Progress → Done)
- Issue comments & collaboration
- Filtering & search APIs
- Basic role-based access (Admin / Member)

---

## 🧰 Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs

---

## 📁 Folder Structure

```txt
server/
│── controllers/
│   ├── authController.js
│   ├── projectController.js
│   ├── ticketController.js
│   └── commentController.js
│
│── models/
│   ├── User.js
│   ├── Project.js
│   ├── Ticket.js
│   └── Comment.js
│
│── routes/
│   ├── authRoutes.js
│   ├── projectRoutes.js
│   ├── ticketRoutes.js
│   └── commentRoutes.js
│
│── middleware/
│   ├── authMiddleware.js
│   └── roleMiddleware.js
│
│── config/
│── server.js
│── .env
````

---

## 🔐 Environment Variables

Create a `.env` file in `server/`:

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection
JWT_SECRET=your_secret_key
```

---

## ▶️ Run Backend Locally

```bash
npm install
npm start
```

Server will run at:

```
http://localhost:5000
```

---

## 🔗 API Endpoints (Sample)

### 🔐 Auth

* `POST /api/auth/register`
* `POST /api/auth/login`

### 📁 Projects

* `GET /api/projects`
* `POST /api/projects`
* `PUT /api/projects/:id`
* `DELETE /api/projects/:id`

### 🐞 Issues / Bugs

* `GET /api/tickets/:projectId`
* `POST /api/tickets`
* `PUT /api/tickets/:id`
* `DELETE /api/tickets/:id` (Admin only)

### 💬 Comments

* `GET /api/comments/:ticketId`
* `POST /api/comments`

---

## 🔒 Security

* Password hashing using bcrypt
* JWT-protected routes
* Role-based access for sensitive actions
* CORS & environment-based config

---

## 🌍 Deployment

* Backend deployed on **Render / Railway**
* MongoDB hosted on **MongoDB Atlas**
* Environment variables secured in hosting platform

---

## 👩‍💻 Author

**Sonali Priyardarshini**

````
