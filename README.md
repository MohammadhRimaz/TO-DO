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

| Layer            | Technology                 |
| ---------------- | -------------------------- |
| Frontend         | React (Vite) + Axios + CSS |
| Backend          | Node.js + Express.js       |
| Database         | PostgreSQL                 |
| ORM              | Prisma                     |
| Containerization | Docker                     |

---

## 📂 Folder Structure

```bash
root/
│
├── backend/
│   ├── index.js
│   ├── controllers/
│   │   └── taskController.js
│   ├── routes/
│   │   └── taskRoutes.js
│   ├── package.json
│   ├── Dockerfile
│   └── prisma/
│       └── schema.prisma
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── components/
│   │   │   └── TaskCard.jsx
│   │   ├── App.css
│   │   └── index.css
│   ├── package.json
│   └── Dockerfile
│
├── Images/
│   └── Screenshot.jpg
│
├── .env
├── .gitignore
├── docker-compose.yml
├── README.md
```

---

## ⚙️ Sample `.env` File

Create a `.env` file in the **root directory** with the following:

```env
# PostgreSQL Connection
DATABASE_URL="postgresql://postgres:password@localhost:5432/todo_db?schema=public"

# Backend Server Port
PORT=5000
```

---

## 🧱 Database Design

### Table: Task

| Column        | Type     | Attributes             | Description                    |
| ------------- | -------- | ---------------------- | ------------------------------ |
| `id`          | Int      | Primary Key, Auto Inc. | Unique identifier for the task |
| `title`       | String   | Required               | Title of the task              |
| `description` | String   | Optional               | Details about the task         |
| `isCompleted` | Boolean  | Default: false         | Marks task completion status   |
| `createdAt`   | DateTime | Default: now()         | Creation timestamp             |

---

## 🧩 Instructions to Build & Run

### ▶️ Run with Docker (Recommended)

**Prerequisites:**

- [Docker](https://www.docker.com/products/docker-desktop/) installed

**Steps:**

1. **Clone the Repository**

   ```bash
   git clone https://github.com/MohammadhRimaz/TO-DO.git
   cd TO-DO
   ```

2. **Create a `.env` file** in the root directory (see sample above).

3. **Build and start all services:**

   ```bash
   docker-compose up --build
   ```

   - This will start:
     - PostgreSQL database
     - Backend API (Express + Prisma)
     - Frontend (React)

4. **Access the app:**

   - Frontend: [http://localhost:5173](http://localhost:5173)
   - Backend API: [http://localhost:5000](http://localhost:5000)

5. **(Optional) Open Prisma Studio:**
   ```bash
   docker-compose exec backend npx prisma studio
   ```
   - Prisma Studio: [http://localhost:5555](http://localhost:5555)

---

### ▶️ Manual (Local) Setup

#### Step 1 - Setup Database

- Make sure PostgreSQL is installed and running locally.

```sql
CREATE DATABASE todo_db;
```

Update `.env` with your PostgreSQL credentials.

#### Step 2 - Install Dependencies

- Backend

  ```bash
  cd backend
  npm install
  npx prisma generate
  npx prisma db push
  ```

- Frontend

  ```bash
  cd ../frontend
  npm install
  ```

#### Step 3 - Run the Application

- Backend

  ```bash
  cd backend
  npm run dev
  ```

  Backend runs at: [http://localhost:5000](http://localhost:5000)

- Frontend

  ```bash
  cd ../frontend
  npm run dev
  ```

  Frontend runs at: [http://localhost:5173](http://localhost:5173)

#### Step 4 - See the Database visually

- Run the command in the backend folder

  ```bash
  npx prisma studio
  ```

  Prisma Studio: [http://localhost:5555](http://localhost:5555)

---
