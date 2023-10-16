import { AbstractAd } from '/src/abstract/AbstractAd';

export class PokiStrategy extends AbstractAd {
  async show() {
    return false;
  }
}
