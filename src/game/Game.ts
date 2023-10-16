import { State } from '/src/enums/state';
import { AdManager } from '/src/game/managers/AdManager';
import { StageManager } from '/src/game/managers/StageManager';
import { StateManager } from '/src/game/managers/StateManager';

export class Game {
  readonly state: StateManager;
  readonly stage: StageManager;
  readonly ads: AdManager;

  constructor() {
    this.ads = new AdManager();
    this.state = new StateManager(this);
    this.stage = new StageManager(this);
  }

  async init() {
    console.log('Game initialized');
    await this.state.changeState(State.Load);
  }

  async start() {
    console.log('Game started');
  }

  async update() {
    // Game loop, should be called by the Lib or the Engine
    await this.state.update();
  }

  async stop() {
    console.log('Game stopped');
  }

  async destroy() {
    console.log('Game destroyed');
  }
}
