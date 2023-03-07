import React from "react";
import propTypes from "prop-types";
import "../styles/Movie.css";

const Movie = ({id, year, title, summary, poster}) => {
    return (
      <div className="movie_list">
          <div className="movie_poster">
              <img src={poster} alt={title}/>
          </div>
          <h3 className="movie_title">{title}</h3>
          <h5 className="movie_year">{year}</h5>
          <p className="movie_summary">{summary}</p>
      </div>
    );

}

Movie.propTypes = {
    id: propTypes.number.isRequired,
    year: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired
}

export default Movie;