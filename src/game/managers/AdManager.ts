import { AbstractAd } from '/src/abstract/AbstractAd';
import { CrazyStrategy } from '/src/game/ads/CrazyStrategy';
import { DevStrategy } from '/src/game/ads/DevStrategy';
import { PokiStrategy } from '/src/game/ads/PokiStrategy';
import env from '/src/common/Env';
import * as store from '/src/store';

export class AdManager {
  private readonly CoolDown = 30_000;
  private readonly ad: AbstractAd;

  private enabled = true;
  private timer: NodeJS.Timeout | null = null;
  private timeLeft = 0;

  constructor() {
    this.ad = this.pickStrategy();
  }

  /**
   * @returns {Promise<boolean>} true if ad was shown, false otherwise
   */
  async show() {
    if (!this.enabled) return;

    this.disableAdManager();
    this.enableAdManagerAfter(this.CoolDown);

    return this.ad.show();
  }

  private disableAdManager() {
    this.enabled = false;
    store.setRewardDisabled(true);
    this.timeLeft = this.CoolDown / 1000;
    this.timer = setInterval(() => {
      store.setRewardTimeLeft(--this.timeLeft);
    }, 1000);
  }

  private enableAdManagerAfter(time: number) {
    setTimeout(() => {
      this.enabled = true;
      store.setRewardDisabled(false);
      if (this.timer) clearTimeout(this.timer);
    }, time);
  }

  private pickStrategy() {
    if (env.isCrazyGames()) return new CrazyStrategy();
    if (env.isPoki()) return new PokiStrategy();

    return new DevStrategy();
  }
}
