import { Game } from '/src/game/Game';

export abstract class AbstractState {
  constructor(protected readonly game: Game) {}

  async activate() {
    console.group(`${this.constructor.name} state`);
    console.info('Activated');
  }

  async deactivate() {
    console.info('Deactivated');
    console.groupEnd();
  }

  async update() {
    await this.game.stage.update();
  }
}
