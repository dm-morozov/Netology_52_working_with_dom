// Game.ts

import goblinImg from "../img/goblin.png";

export default class Game {
  private readonly size: number;
  private lastIndex: number | null = null;
  private goblinVisionTimerId: number | null = null;

  constructor(size: number = 4) {
    console.log("Game initialized");
    if (size <= 3) size = 4;
    if (size > 10) size = 10;
    this.size = size;
  }

  public start(): void {
    this.renderField();
    this.goblin();

    this.goblinVisionTimerId = window.setInterval(() => {
      this.goblin();
    }, 2000);
  }

  public stop(): void {
    clearInterval(this.goblinVisionTimerId!);
  }

  private renderField(): void {
    const container = document.querySelector("#game-container");
    container?.classList.add("game-container");

    if (container) container.innerHTML = "";
    console.log(container);
    let num: number = 1;
    for (let row = 0; row <= this.size - 1; row++) {
      const rowEl = document.createElement("div");
      rowEl.classList.add("row");

      for (let col = 0; col <= this.size - 1; col++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.classList.add("num-" + num++);
        rowEl.appendChild(cell);
      }

      container?.appendChild(rowEl);
    }
  }

  private goblin(): void {
    const findGoblin = document.querySelector(".goblin");
    if (findGoblin) {
      findGoblin.removeAttribute("style");
      findGoblin.classList.remove("goblin");
    }
    let randomIndex: number;
    do {
      randomIndex = Math.floor(Math.random() * this.size * this.size) + 1;
    } while (randomIndex === this.lastIndex);

    this.lastIndex = randomIndex;
    const attackCell = document.querySelector(".num-" + randomIndex);
    attackCell?.classList.add("goblin");
    attackCell?.setAttribute(
      "style",
      `background: url(${goblinImg}) center/cover no-repeat`,
    );
    console.log(attackCell);
  }
}
