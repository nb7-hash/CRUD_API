# Task CRUD API

A simple RESTful CRUD API for managing tasks, built with Node.js, Express, and MongoDB (via Mongoose). Supports creating, reading, updating, and deleting tasks, with schema validation and basic error handling/logging.

## Tech Stack

- **Node.js** — runtime
- **Express** — web framework / routing
- **MongoDB** — database
- **Mongoose** — ODM for schema definition and validation
- **dotenv** — environment variable management
- **Postman** — API testing (collection included)

## Project Structure

```
task-crud-api/
├── config/
│   └── db.js              # MongoDB connection logic
├── models/
│   └── Task.js             # Mongoose schema for a Task
├── controllers/
│   └── taskControllers.js  # Route handler logic (CRUD operations)
├── routes/
│   └── taskRoutes.js       # API route definitions
├── postman/
│   └── Task-CRUD-API.postman_collection.json
├── .env.example             # Sample environment variables (no secrets)
├── .gitignore
├── package.json
└── server.js                # App entry point
```

## Setup Instructions

1. **Clone the repository**
   ```
   git clone <your-repo-url>
   cd task-crud-api
   ```

2. **Install dependencies**
   ```
   npm install
   ```

3. **Configure environment variables**

   Copy `.env.example` to `.env` and fill in your own values:
   ```
   cp .env.example .env
   ```
   Then edit `.env`:
   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=3000
   ```

4. **Run the server**
   ```
   npx nodemon server.js
   ```
   You should see:
   ```
   Server is running on http://localhost:3000/
   MongoDB connected successfully
   ```

## API Endpoints

Base URL: `http://localhost:3000/api/tasks`

| Method | Endpoint         | Description                  | Body (JSON)                                      |
|--------|------------------|-------------------------------|---------------------------------------------------|
| GET    | `/`              | Get all tasks                | —                                                   |
| GET    | `/:id`           | Get a single task by ID      | —                                                   |
| POST   | `/`              | Create a new task            | `{ "title": "string", "description": "string", "completed": false }` |
| PUT    | `/:id`           | Update an existing task      | Any subset of task fields to update               |
| DELETE | `/:id`           | Delete a task                | —                                                   |

### Task Schema

| Field         | Type      | Required | Default |
|---------------|-----------|----------|---------|
| `title`       | String    | Yes      | —       |
| `description` | String    | No       | `""`    |
| `completed`   | Boolean   | No       | `false` |
| `createdAt`   | Date      | Auto     | —       |
| `updatedAt`   | Date      | Auto     | —       |

### Sample Request/Response

**Create a task**
```
POST /api/tasks
```
```json
{
  "title": "Learn Mongoose",
  "description": "Finish the CRUD API task",
  "completed": false
}
```
Response `201 Created`:
```json
{
  "_id": "66f1a2b3c4d5e6f7a8b9c0d1",
  "title": "Learn Mongoose",
  "description": "Finish the CRUD API task",
  "completed": false,
  "createdAt": "2026-09-26T05:30:00.000Z",
  "updatedAt": "2026-09-26T05:30:00.000Z"
}
```

**Update a task**
```
PUT /api/tasks/66f1a2b3c4d5e6f7a8b9c0d1
```
```json
{
  "completed": true
}
```
Response `200 OK`:
```json
{
  "message": "Updated successfully",
  "task": {
    "_id": "66f1a2b3c4d5e6f7a8b9c0d1",
    "title": "Learn Mongoose",
    "completed": true,
    "...": "..."
  }
}
```

## Error Handling

- `400 Bad Request` — validation errors (e.g., missing required `title`)
- `404 Not Found` — task with the given ID doesn't exist
- `500 Internal Server Error` — unexpected server/database errors

Errors are logged to the console for basic debugging visibility.

## Testing with Postman

A Postman collection is included at `postman/Task-CRUD-API.postman_collection.json`, covering all 5 endpoints. Import it into Postman via **File → Import**, then run requests against `http://localhost:3000/api/tasks`.

## Author

Built by Not7b as part of MERN stack internship onboarding.

