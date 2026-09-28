# CRUD Job Portal

A Node.js REST API for managing job listings, built with Express, MongoDB (Mongoose) and Multer for company logo uploads.

## Features
- Create, read, update and delete job posts
- Image upload for company logo (Multer)
- Mongoose validation (employment type, status, required fields)

## Tech Stack
Node.js, Express 5, MongoDB, Mongoose, Multer, dotenv

## Getting Started

```bash
git clone https://github.com/<your-username>/crud-job-portal.git
cd crud-job-portal
npm install
cp .env.example .env   # then fill in your MongoDB URL
npm run dev
```

## API Endpoints (base: `/api`)

| Method | Endpoint       | Description                                   |
|--------|----------------|-----------------------------------------------|
| POST   | `/job/create`  | Create a job (multipart/form-data, `image` file) |
| GET    | `/job/get`     | Get all jobs                                  |
| GET    | `/job/:id`     | Get a single job                              |
| PUT    | `/job/:id`     | Update a job                                  |
| DELETE | `/job/:id`     | Delete a job                                  |

## Job Fields
`title`, `description`, `companyName`, `image`, `location`, `salary`, `experience`, `employmentType` (Full Time / Part Time / Internship / Contract), `skills[]`, `qualification`, `applicationDeadline`, `status` (Active / Closed / Draft)
