// main.ts
import Game from "./Game";
import MovieList from "./MovieList";
import { Movie } from "./interface";
import movieDataJSON from "./movieData.json";

const movieData: Array<Movie> = movieDataJSON;

declare global {
  interface Window {
    game: Game;
    movieList: MovieList;
  }
}

const game = new Game(4);
game.start();
window.game = game;

const movieList = new MovieList(movieData);
movieList.renderTable();
window.movieList = movieList;
