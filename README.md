# 📝 To-Do Task Web Application

A full-stack **To-Do Task Web Application** built using **React, Express, Prisma, and PostgreSQL**.  
This project allows users to create, view, complete, and delete tasks efficiently, following a clean MVC structure.

---

## 📸 Project Screenshot

![Project Screenshot](Images/Screenshot.jpg)

---

## 🚀 Features

- ➕ Add new tasks with a title and description
- ✅ Mark tasks as completed (automatically hides them from the list)
- 🗑️ Delete any task permanently
- 🔄 Displays only the latest 5 uncompleted tasks
- 📱 Responsive UI (split view on large screens and stacked on smaller screens)
- 🧩 Clean separation of backend, frontend, and database layers

---

## 🛠️ Tech Stack

| Layer            | Technology                     |
| ---------------- | ------------------------------ |
| Frontend         | React (Vite) + Axios + CSS     |
| Backend          | Node.js + Express.js           |
| Database         | PostgreSQL                     |
| ORM              | Prisma                         |
| Containerization | Docker (optional future setup) |

---

## 📂 Folder Structure

```bash
root/
│
├── backend/
│ ├── index.js
│ ├── controllers/
│ │ └── taskController.js
│ ├── routes/
│   └── taskRoutes.js
│
├── frontend/
│ └── src/
│ ├── App.jsx
│ ├── components/
│ │ └── TaskCard.jsx
│ ├── App.css
│ └── index.css
│
├── prisma/
│ └── schema.prisma
│
├── image/
│ └── Screenshot.jpg
│
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Sample `.env` File

Create a `.env` file in the **root directory** with the following:

```env
# PostgreSQL Connection
DATABASE_URL="postgresql://postgres:yourpassword@localhost:5432/todo_db?schema=public"

# Backend Server Port
PORT=5000
```

## 🧱 Database Design

### Table: Task

| Column        | Type     | Attributes             | Description                    |
| ------------- | -------- | ---------------------- | ------------------------------ |
| `id`          | Int      | Primary Key, Auto Inc. | Unique identifier for the task |
| `title`       | String   | Required               | Title of the task              |
| `description` | String   | Optional               | Details about the task         |
| `isCompleted` | Boolean  | Default: false         | Marks task completion status   |
| `createdAt`   | DateTime | Default: now()         | Creation timestamp             |

## 🧩 Instructions to Build & Run

### Step 1 — Clone the Repository

```bash
git clone https://github.com/MohammadhRimaz/TO-DO.git
cd todo-app
```

### Step 2 — Setup Database

- Make sure PostgreSQL is installed and running locally.

```bash
CREATE DATABASE todo_db;
```

Update .env with your PostgreSQL credentials.

### Step 3 — Install Dependencies

- Root Level

```bash
npm install
npx prisma generate
npx prisma db push
```

- Frontend

```bash
cd frontend
npm install
```

### Step 4 — Run the Application

- Run Backend in the root level

```bash
npm run dev
```

- Backend runs at:
  👉 http://localhost:5000

- Run Frontend

```bash
cd frontend
npm run dev
```

Frontend runs at:
👉 http://localhost:5173

### Step 5 — See the Database visually

- Run the command in the root folder

```bash
npx prisma studio
```

Prisma Studio is run on http://localhost:5555
