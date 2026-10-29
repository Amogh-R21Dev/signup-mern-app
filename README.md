# Sign Up App (React + Express.js + REST API + MongoDB)

A sign-up (and log-in) flow built with the MERN stack. The React front end talks to an Express.js REST API, which stores users in MongoDB. Passwords are hashed with bcrypt before they are saved.

## Screenshots

### 1. Sign Up page
![Sign Up page](screenshots/1-signup-page.png)

### 2. Sign up successful (signed in)
![Sign up success](screenshots/2-signup-success.png)

### 3. Sign up failed (email already registered)
![Sign up failed](screenshots/3-signup-failed.png)




[
  {
    "_id": "6adfa08a12b32825678c9c3f",
    "email": "amogh@example.com",
    "password": "$2b$10$eYe4wVQq/BgRsPsKds0teuqFZWKT8fH5GQ1ITTGUQoj.hAWcW2ana",
    "createdAt": "2026-10-26T18:48:42.569Z",
    "updatedAt": "2026-10-26T18:48:42.569Z",
    "__v": 0
  },
  
  {
    "_id": "6adfa08c12b32825678c9c40",
    "email": "priya@example.com",
    "password": "$2b$10$8sx/UurEHkUkQppQNqewfeqzMGiPWxXelfYSvbdZOqqkc1RjqTwtm",
    "createdAt": "2026-10-26T18:48:44.318Z",
    "updatedAt": "2026-10-26T18:48:44.318Z",
    "__v": 0
  }
]
```


## How to run

You need Node.js (v18 or newer) and MongoDB running locally (or a MongoDB Atlas connection string).

```bash
# 1. install everything
npm run install-all

# 2. create the server config file
#    Windows (cmd):   copy server\.env.example server\.env
#    Mac/Linux:       cp server/.env.example server/.env

# 3. start API and React together
npm run dev
```

Then open http://localhost:5173.

To see the stored users at any time:

```bash
cd server
node show-users.js
```
