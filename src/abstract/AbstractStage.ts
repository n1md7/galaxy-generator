import { Game } from '/src/game/Game';
import { AssetManager } from '/src/game/managers/AssetManager';

export abstract class AbstractStage {
  private readonly assetManager: AssetManager;
  private readonly resources = {};

  constructor(protected readonly game: Game) {
    this.assetManager = new AssetManager();
  }

  protected abstract get resourcesToLoad(): Record<string, string>;

  get assets() {
    return this.resources as Record<string, unknown>;
  }

  async startAssetLoading() {
    this.assetManager.setAssets(this.resourcesToLoad);
    await this.assetManager.startLoading();
  }

  async update() {
    // Update loop for the stage
  }
}
