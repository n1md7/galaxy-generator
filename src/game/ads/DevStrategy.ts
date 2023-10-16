import { AbstractAd } from '/src/abstract/AbstractAd';
import { delay } from '/src/game/utils/delay';

export class DevStrategy extends AbstractAd {
  async show() {
    console.log('Showing ad...');
    await delay(2000);
    console.log('Ad finished');

    return true;
  }
}
