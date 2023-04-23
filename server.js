const express = require("express");
const app = express();
const db = require("./api/db");
const models = require("./api/models");
const router = require("./api/routes");
const cors = require("cors");
const cookieParser = require("cookie-parser"); //Para poder hacer el login con Auth

app.use(express.static("src"));

//Middleware

app.use(
  cors({
    origin: "tmdb-by-micaelalozano.vercel.app",
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser()); //Para poder hacer el login con Auth

app.use("/api", router);

db.sync({ force: false }).then(() => {
  console.log("Db Connected");
  app.listen(5432, () => console.log("Servidor escuchando en el puerto 3001"));
});
