import express from "express";
import routes from "./routes";
import {
  home,
  getCreate,
  postCreate,
  movieDetail,
  getEditMovie,
  postEditMovie,
  deleteMovie,
  search,
} from "./movieController";

const movieRouter = express.Router();

// home
movieRouter.get(routes.home, home);

// Create Movie
movieRouter.get(routes.create, getCreate);
movieRouter.post(routes.create, postCreate);

// Movie Detail
movieRouter.get(routes.movieDetail, movieDetail);

// Edit Movie
movieRouter.get(routes.editMovie(), getEditMovie);
movieRouter.post(routes.editMovie(), postEditMovie);

// Delete Movie
movieRouter.get(routes.deleteMovie(), deleteMovie);

// Search Movie
movieRouter.get(routes.search, search);

export default movieRouter;
