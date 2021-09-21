import React from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {
          _id: 1,
          Title: "Howl's Moving Castle",
          Description:
            "description 1",
          ImgPath:
            "img 1",
          Genre: "Anime",
          Director: "director1",
        },
        {
          _id: 2,
          Title: "The Shawshank Redemption",
          Description:
            "description 2",
          ImgPath:
            "img 2",
          Genre: "Drama",
          Director: "director 2",
        },
        {
          _id: 3,
          Title: "Sprited Away",
          Description:
            "description 3",
          ImgPath:
            "img 3",
          Genre: "Anime",
          Director: "director 3",
        },
      ],
      selectedMovie: null,
    };
  }

  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie,
    });
  }

  render() {
    const { movies, selectedMovie } = this.state;
    if (movies.length === 0)
      return <div className="main-view">The list is empty!</div>;

    return (
      <div className="main-view">
        {selectedMovie ? (
          <MovieView
            movie={selectedMovie}
            onBackClick={(newSelectedMovie) => {
              this.setSelectedMovie(newSelectedMovie);
            }}
          />
        ) : (
          movies.map((movie) => (
            <MovieCard
              key={movie._id}
              movieData={movie}
              onMovieClick={(movie) => {
                this.setSelectedMovie(movie);
              }}
            />
          ))
        )}
      </div>
    );
  }
}

export default MainView;
