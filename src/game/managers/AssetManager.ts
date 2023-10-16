import { emitter } from '/src/common/Emitter';
import { delay } from '/src/game/utils/delay';
import * as store from '/src/store';

export class AssetManager {
  private readonly assetsLoaded: Record<string, unknown> = {};
  private readonly assetsToLoad: Record<string, string> = {};

  setAssets(resources: Record<string, string>) {
    for (const [key, value] of Object.entries(resources)) {
      this.assetsToLoad[key] = value;
    }
  }

  async startLoading() {
    for (const [_key, _value] of Object.entries(this.assetsLoaded)) {
      // TODO: Load assets
    }
    this.assetsLoaded.backgroundImage = new Image();
    this.assetsLoaded.spriteSheet = new Image();

    let progress = Math.random() * 10;
    store.setLoaderProgress(progress);
    await delay(1000);
    progress += Math.random() * 40;
    store.setLoaderProgress(progress);
    await delay(1000);
    progress += Math.random() * 50;
    store.setLoaderProgress(Math.max(progress, 100));
    // TODO: report progress
    // TODO: report progress
    // TODO: report error if any
    emitter.emit('am:error', 'Error loading assets');
  }

  get assets() {
    return this.assetsLoaded;
  }
}
