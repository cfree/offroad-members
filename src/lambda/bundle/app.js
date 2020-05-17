const express = require('express');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const db = require('./db');
const { usersToDb } = require('./adapters');

const corsOptions = {
  credentials: true,
  origin: process.env.FRONTEND_URL,
};

const app = express();

app.use(cors(corsOptions));
app.use(cookieParser());

// Decode the JWT to get user ID on each request
app.use(async (req, res, next) => {
  const { token } = req.cookies;

  if (token) {
    const { userId } = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = userId;
  }

  next();
});

// See info about the user if logged in
app.use(async (req, res, next) => {
  if (!req.userId) {
    return next();
  }

  const user = await db
    .first(
      'u.user_id AS id',
      'r.name AS role',
      't.name AS accountType',
      's.name AS accountStatus',
      'u.email',
      'u.first_name AS firstName',
      'u.last_name AS lastName',
      'u.username',
    )
    .from('users AS u')
    .leftJoin('roles AS r', 'r.role_id', 'u.role_id')
    .leftJoin('account_types AS t', 't.account_type_id', 'u.account_type_id')
    .leftJoin(
      'account_statuses AS s',
      's.account_status_id',
      'u.account_status_id',
    )
    .where('u.user_id', req.userId);

  if (user) {
    req.user = user;
  }

  next();
});

module.exports.app = app;
