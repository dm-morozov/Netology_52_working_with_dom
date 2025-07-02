// Game.ts

export default class Game {
  private readonly size: number;

  constructor(size: number = 4) {
    console.log("Game initialized");
    if (size <= 3) size = 4;
    if (size > 10) size = 10;
    this.size = size;
  }

  public start(): void {
    this.renderField();
  }

  private renderField(): void {
    const container = document.querySelector("#game-container");
    container?.classList.add("game-container");
    console.log(container);
    for (let row = 0; row <= this.size - 1; row++) {
      const rowEl = document.createElement("div");
      rowEl.classList.add("row");

      for (let col = 0; col <= this.size - 1; col++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        rowEl.appendChild(cell);
      }

      container?.appendChild(rowEl);
    }
  }
}
