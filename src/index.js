import "./db";
import "./models/Movie";
import express from "express";
import path from "path";
import bodyParser from "body-parser";
import movieRouter from "./movieRouter";
import { localsMiddleware } from "./middlewares";
import routes from "./routes";

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(localsMiddleware);
app.use(routes.home, movieRouter);

// Codesanbox does not need PORT :)
// app.listen(() => console.log(`✅  Server Ready!`));

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`✅  Server Ready! @ http://localhost:${PORT}`)
);
