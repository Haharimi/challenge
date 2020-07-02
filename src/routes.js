// Movie
const HOME = "/";
const CREATE = "/create";
const MOVIE_DETAIL = "/:id";
const EDIT_MOIVE = "/:id/edit";
const DELETE_MOVIE = "/:id/delete";
const SEARCH = "/search";

const routes = {
  home: HOME,
  create: CREATE,
  movieDetail: MOVIE_DETAIL,
  editMovie: (id) => {
    if (id) {
      return `/${id}/edit`;
    } else {
      return EDIT_MOIVE;
    }
  },
  deleteMovie: (id) => {
    if (id) {
      return `/${id}/delete`;
    } else {
      return DELETE_MOVIE;
    }
  },
  search: SEARCH,
};

export default routes;
