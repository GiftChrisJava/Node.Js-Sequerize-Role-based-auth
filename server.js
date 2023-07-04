const express = require("express"); // building apis
const bodyParser = require("body-parser"); // creat req.body
const cors = require("cors"); // for enabling cors

const app = express(); // created an express route

var corsOptions = { origin: "htpp://localhost:8080" };
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
const Role = db.role;

db.sequelize.sync({ force: false }).then(() => {
  console.log("Drop and Resync Db");
  // initial();
});

function initial() {
  Role.create({
    id: 1,
    roleName: "user",
  });

  Role.create({
    id: 2,
    roleName: "moderator",
  });

  Role.create({
    id: 3,
    roleName: "admin",
  });
}

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to JWT with database" });
});

// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);

// set port and listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
