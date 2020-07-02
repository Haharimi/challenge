/*
You DONT have to import the Movie with your username.
Because it's a default export we can nickname it whatever we want.
So import Movie from "./models"; will work!
You can do Movie.find() or whatever you need like normal!
*/
import Movie from "./models/Movie";
import routes from "./routes";

export const home = async (req, res) => {
  try {
    const movies = await Movie.find({});
    res.render("home", { pageTitle: "Home", movies });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", movies });
  }
};

export const getCreate = (req, res) => {
  res.render("create", { pageTitle: "Create" });
};
export const postCreate = async (req, res) => {
  const {
    body: { title, year, rating, synopsis, genres },
  } = req;
  const newMovie = await Movie.create({
    title,
    year,
    rating,
    synopsis,
    genres: genres.split(","),
  });
  // 추후에 movieDetail route에 함수추가 후 디테일페이지로 이동
  res.redirect(`/${newMovie._id}`);
};

export const movieDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const movie = await Movie.findById(id);
    res.render("movieDetail", { pageTitle: movie.title, movie });
    console.log(movie.id);
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const getEditMovie = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const movie = await Movie.findById(id);
    res.render("editMovie", { pageTitle: "edit", movie });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const postEditMovie = async (req, res) => {
  const {
    params: { id },
    body: { title, year, rating, synopsis, genres },
  } = req;
  try {
    const newMovie = await Movie.findOneAndUpdate(
      { _id: id },
      { title, year, rating, synopsis, genres }
    );
    res.redirect(`/${newMovie._id}`);
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const deleteMovie = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    await Movie.findByIdAndRemove({ _id: id });
  } catch (error) {
    console.log(error);
  }
  res.redirect(routes.home);
};

// export const search = async (req, res) => {
//   let movies = await Movie.find({});
//   if (req.query.year) {
//     const year = req.query.year;
//     const movies = movies.filter((movie) => movie.year >= year);
//     res.render("home", { pageTitle: `Searching by Year: ${year}`, movies });
//   }
// };

export const search = (req, res) => res.render("search");
