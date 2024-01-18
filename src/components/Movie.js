import propTypes from "prop-types";
import { Link } from "react-router-dom";
import style from "./Movie.module.css";

function Movie({ id, coverImg, title, year, summary, genres }) {
  return (
    <Link to={`/movie/${id}`}>
      <div className={style.movie}>
        <img src={coverImg} alt={title} />
        <div className={style.movie_info}>
          <h2 className={style.movie_title}>{title} </h2>
          <h4 className={style.movie_year}>{year}</h4>
          <p className={style.movie_summary}>
            {summary.length > 300 ? `${summary.slice(0,300)} ...` : summary}</p>
          <ul className={style.movie_geners}>
            {genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  id: propTypes.number.isRequired,
  coverImg: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  year: propTypes.number.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
  summary: propTypes.string.isRequired
};

export default Movie;
