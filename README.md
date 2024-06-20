# Todo App Backend

This is a Todo back-end application built with Node.js, Express, and MongoDB, providing user authentication and CRUD operations for todos.

## Features

- User authentication (sign-up, sign-in)
- JWT-based authentication
- CRUD operations for todos
- Search functionality for todos
- Pagination support for todos
- Mark todos as pinned or favorite
- MongoDB for data storage

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)
- bcryptjs
- express-validator

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB instance (local or cloud-based, e.g., MongoDB Atlas)

### Installation

1. Clone the repository:

    bash
    git clone https://github.com/viveksinghjadaun/ToDoApp.git
    cd ToDoApp
    

2. Install dependencies:

    bash
    npm install
    

3. Create a .env file in the root directory and add the following environment variables:

    env
    PORT=5000
    MONGO_URI=your_mongo_db_connection_string
    JWT_SECRET=your_generated_secret
    

### Running the Application

1. Start the server:

    bash
    node app.js
    

2. The server will be running on http://localhost:5000

### API Endpoints

#### Authentication

- *Register User*
  - POST /api/auth/register
  - Request body:
    json
    {
      "username": "testuser",
      "password": "password123"
    }
    

- *Login User*
  - POST /api/auth/login
  - Request body:
    json
    {
      "username": "testuser",
      "password": "password123"
    }
    

#### Todos

- *Create Todo*
  - POST /api/todos
  - Headers: Authorization: Bearer <token>
  - Request body:
    json
    {
      "title": "Sample Todo",
      "description": "This is a sample todo"
    }
    

- *Get Todos*
  - GET /api/todos
  - Headers: Authorization: Bearer <token>
  - Query parameters (optional): page=<page_number>

- *Get Todo By ID*
  - GET /api/todos/:id
  - Headers: Authorization: Bearer <token>

- *Update Todo*
  - PUT /api/todos/:id
  - Headers: Authorization: Bearer <token>
  - Request body (partial updates allowed):
    json
    {
      "title": "Updated Todo Title",
      "description": "Updated description",
      "isPinned": true,
      "isFavorite": false
    }
    

- *Delete Todo*
  - DELETE /api/todos/:id
  - Headers: Authorization: Bearer <token>

- *Search Todos*
  - GET /api/todos/search?q=<search_string>
  - Headers: Authorization: Bearer <token>



## Postman Collection
A Postman collection is provided with sample requests for each endpoint. You can import it into Postman using the link:https://techforensics.postman.co/workspace/Team-Workspace~5f8f7946-49eb-472c-8392-80b4924d6cf1/collection/33461578-0b9ef52c-38b9-4a9d-9a22-dbdc9b49e803?action=share&creator=33461578
