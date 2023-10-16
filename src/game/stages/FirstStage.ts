import { AbstractStage } from '/src/abstract/AbstractStage';

export class FirstStage extends AbstractStage {
  protected get resourcesToLoad() {
    return {
      map: 'assets/stages/01/map.png',
      player: 'assets/stages/01/player.png',
      enemy: 'assets/stages/01/enemy.png',
    };
  }
}
