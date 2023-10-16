import { AbstractState } from '/src/abstract/AbstractState';
import { State } from '/src/enums/state';
import { delay } from '/src/game/utils/delay';
import * as store from '/src/store';

export class LoadState extends AbstractState {
  async activate() {
    await super.activate();
    store.setShowLoader(true);
    await this.game.stage.startAssetLoading();
    await delay(2000);
    await this.game.state.changeState(State.Play);
  }

  async deactivate() {
    store.setShowLoader(false);
    await super.deactivate();
  }

  async update() {}
}
