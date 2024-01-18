import propTypes from "prop-types";
import style from "./DetailMovie.module.css";

function DetailMovie({
  coverImg,
  title,
  year,
  runtime,
  rating,
  summary,
  genres,
}) {
  return (
    <div className={style.detail}>
      <img src={coverImg} alt={title} />
      <div className={style.detail_info}>
        <h1 className={style.detail_title}>{title}</h1>
        <h2 className={style.detail_year}>{year}</h2>
        <h3 className={style.detail.addition}>
          {runtime} min / ★ {rating}
        </h3>
        <ul className={style.detail_genres}>
          {genres.map((g) => (
            <li key={g}> {g} </li>
          ))}
        </ul>
        <p className={style.detail_summary}>{summary}</p>
      </div>
    </div>
  );
}

DetailMovie.propTypes = {
  coverImg: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  year: propTypes.number.isRequired,
  runtime: propTypes.string.isRequired,
  rating: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
};

export default DetailMovie;
