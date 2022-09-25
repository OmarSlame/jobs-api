
# Jobs API Features: 
##### Register user
- Validate the name, email, password in the Mongoose model (There is validation, default values and enum for model fields)
- Hash Password (with bcryptjs)
- Save User
- Generate Token (Using jsonwebtoken module)
- Send Response with Token
##### Log in

- Validate the email and password in the controller
- If email or password is missing, throw BadRequestError
- Find User
- Compare Passwords
- If no user or password does not match, throw UnauthenticatedError
- If correct, generate Token (Using jsonwebtoken module)
- Send Response with Token

##### CRUD operations on user's job (each user has many jobs)
- Create authentication middleware that will check if authorization is exist in a request header and verify the JWT
- Use the authentication middleware in all jobs routs


---

# Setup

```bash
npm install && npm start
```

# Database Connection

1. Import connect.js
2. Invoke in start()
3. Setup .env in the root
4. Add MONGO_URI with correct value

# Routers

- auth.js
- jobs.js

# User Model

Email Validation Regex

```regex
/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
```

# Mongoose Errors
Instade of using the built in error handler, custom error handler middleware was created.
Create custom errors classes, by extending Error class. also, http-status-codes module was used.
In the custom error handler middleware, the bellow mongoose errors were overridden:
- Validation Errors
- Duplicate (Email)
- Cast Error

# Security: Will use the below packages to secure our app after deploying it in heroku

- helmet
- cors: cross-origin resource sharing, without this package your API will be accessable only from the same domain for the hosting server and by using it you can make it accessable from everywhere
- xss-clean: protect the req.body, reg.param, req.query from being manupilated from cross-site scriptin attacks
- express-rate-limit

# Swagger UI
API documentation done using swagger UI