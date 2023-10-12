# Node.js Express Login and Registration example with JWT

- Appropriate Flow for User Login and Registration with JWT Authentication
- Node.js Express Architecture with CORS, Authentication & Authorization middlewares & Sequelize
- How to configure Express routes to work with JWT
- How to define Data Models and association for Authentication and Authorization
- Way to use Sequelize to interact with MySQL Database

## Project setup
```
npm install
```

### Run
```
node server.js
```

### API Endpoints

| Method | URL | Description |
|--------|-----|-------------|
| POST   | `/api/auth/signup` | Signup new account |
| POST   | `/api/auth/signin` | Login an account |
| POST   | `/api/auth/signout` | Logout the account |
| GET    | `/api/test/all` | Retrieve public content |
| GET    | `/api/test/user` | Access User’s content |
| GET    | `/api/test/mod` | Access Moderator’s content |
| GET    | `/api/test/admin` | Access Admin’s content |

You can get the Postman collection in the link below:

[![Run in Postman](https://run.pstmn.io/button.svg)](./Express-API-Endpoint.postman_collection.json)

### Contact
```
Email: hello@iearul.xyz
```