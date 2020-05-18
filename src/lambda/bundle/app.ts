import express from 'express';
import cookieParser from 'cookie-parser';
// import jwt from 'jsonwebtoken';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

// const db = require('./db');

const corsOptions = {
  credentials: true,
  origin: process.env.FRONTEND_URL,
};

const app = express();

app.use(cors(corsOptions));
app.use(cookieParser());

app.get('/graphql', (req, res) => res.send('meow'));

// Decode the JWT to get user ID on each request
// app.use(async (req, res, next) => {
//   const { token } = req.cookies;

//   if (token) {
//     const { userId } = jwt.verify(token, process.env.JWT_SECRET);
//     req.userId = userId;
//   }

//   next();
// });

// See info about the user if logged in
// app.use(async (req, res, next) => {
//   if (!req.userId) {
//     return next();
//   }
// const user = await db.query.user(
//   { where: { id: req.userId } },
//   '{ id, role, accountType, accountStatus, email, firstName, lastName, username }',
// );
// req.user = user;

//   next();
// });

export default app;
