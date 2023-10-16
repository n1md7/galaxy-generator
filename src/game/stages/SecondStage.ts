import { AbstractStage } from '/src/abstract/AbstractStage';

export class SecondStage extends AbstractStage {
  protected get resourcesToLoad() {
    return {
      map: 'assets/stages/02/map.png',
      player: 'assets/stages/02/player.png',
      enemy: 'assets/stages/02/enemy.png',
    };
  }
}
