// main.ts
import Game from "./Game";

declare global {
  interface Window {
    game: Game;
  }
}

const game = new Game(4);
game.start();
window.game = game;
