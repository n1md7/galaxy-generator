import { AbstractState } from '/src/abstract/AbstractState';
import { State } from '/src/enums/state';
import { delay } from '/src/game/utils/delay';
import * as store from '/src/store';

export class PlayState extends AbstractState {
  async activate() {
    await super.activate();
    await this.game.start();
    store.setShowGamePlay(true);

    await delay(5000);
    await this.game.stage.nextStage();
    await this.game.state.changeState(State.Load);
  }

  async deactivate() {
    store.setShowGamePlay(false);
    await super.deactivate();
  }

  async update() {}
}
