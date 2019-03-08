const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

passport.use(new GoogleStrategy());

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`App is running on port ${port}`));