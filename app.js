console.clear();
/*
  Step 1: Create a new express app
*/
const express = require("express");
const app = express();
require("dotenv").config();

const path = require("path");

/*
  Step 2: Setup Mongoose (using environment variables)
*/
const mongoose = require("mongoose");
mongoose
  .connect(process.env.DB_URI, {
    auth: {
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
    },
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((err) => console.error(`Error: ${err}`));

/*
  Step 3: Setup and configure Passport
*/
// Setup our session
const passport = require("passport");
const session = require("express-session");
app.use(
  session({
    secret: "any salty secret here",
    resave: true,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());
const User = require("./models/User");
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

/*
  Step 4: Setup the asset pipeline, path, the static paths,
  the views directory, and the view engine
*/
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/css", express.static("assets/css"));
app.use("/javascript", express.static("assets/javascript"));
app.use("/images", express.static("assets/images"));

app.use("/uploads", express.static("uploads"));
/*
  Step 5: Setup the body parser
*/
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*
  Step 6: Setup our flash helper, default locals, and local helpers (like formData and authorized)
*/
const flash = require("connect-flash");
app.use(flash());
app.use("/", (req, res, next) => {
  // Setting default locals
  res.locals.pageTitle = "Untitled";

  // Passing along flash message
  res.locals.flash = req.flash();
  res.locals.formData = req.session.formData || {};
  req.session.formData = {};

  // Authentication helper
  res.locals.authorized = req.isAuthenticated();
  if (res.locals.authorized) res.locals.email = req.session.passport.user;

  next();
});

// Our authentication helper
const isAuthenticated = (req) => {
  return req.session && req.session.userId;
};
app.use((req, res, next) => {
  req.isAuthenticated = () => {
    if (!isAuthenticated(req)) {
      req.flash("error", `You are not permitted to do this action.`);
      res.redirect("/");
    }
  };

  res.locals.isAuthenticated = isAuthenticated(req);
  next();
});

/*
  Step 7: Register our route composer
*/
const routes = require("./routes.js");
app.use("/api", routes);

app.use(express.static(path.join(__dirname, "client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

/*
  Step 8: Start the server
*/
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}`));
