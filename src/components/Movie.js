import React from "react";
import propTypes from "prop-types";

const Movie = ({id, year, title, summary, poster}) => {
    return (
      <div>
          <h1>{title}</h1>
          <span>{year}</span>
          <span>{id}</span>
          <span>{summary}</span>
          <span>{poster}</span>
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