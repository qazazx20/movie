import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../components/DetailMovie";
import style from "./Home.module.css";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movieInfo, setMovieInfo] = useState([]);
  const { id } = useParams();

  const getMovieInfo = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovieInfo(json.data.movie);
    setLoading(false);
  };
  
  useEffect(() => {
    getMovieInfo();
  }, []);

  return (
    <div>
      {loading ? (
        <div className={style.loading}>
          <span>Loading...</span>
        </div>
      ) : (
        <DetailMovie
          coverImg={movieInfo.large_cover_image}
          title={movieInfo.title}
          year={movieInfo.year}
          runtime={movieInfo.runtime}
          rating={movieInfo.rating}
          summary={movieInfo.description_full}
          genres={movieInfo.genres}
        />
      )}
    </div>
  );
}

export default Detail;
