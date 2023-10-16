import { AbstractStage } from '/src/abstract/AbstractStage';
import { FirstStage } from '/src/game/stages/FirstStage';
import { SecondStage } from '/src/game/stages/SecondStage';
import { Game } from '/src/game/Game';
import * as store from '/src/store';

export class StageManager {
  private readonly stages: AbstractStage[];
  private currentStage: AbstractStage;

  constructor(game: Game) {
    this.stages = [
      new FirstStage(game),
      new SecondStage(game),
      new SecondStage(game),
      new SecondStage(game),
      new SecondStage(game),
      new SecondStage(game),
      new SecondStage(game),
      new SecondStage(game),
      new SecondStage(game),
    ];
    this.currentStage = this.stages[store.stage()];
  }

  async update() {
    await this.currentStage.update();
  }

  async nextStage() {
    this.changeStage(store.stage() + 1);
  }

  startAssetLoading() {
    return this.currentStage.startAssetLoading();
  }

  private changeStage(stage: number) {
    stage = Math.min(stage, this.stages.length - 1);
    this.currentStage = this.stages[stage];
    store.setStage(stage);
  }
}
