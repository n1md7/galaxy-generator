import { AssetLoader } from '/src/components/AssetLoader';
import { GamePlay } from '/src/components/GamePlay';
import { Game } from '/src/game/Game';
import { createEffect } from 'solid-js';

export function Main() {
  const game = new Game();

  createEffect(async () => {
    await game.init();

    return () => game.destroy();
  });

  return (
    <>
      <AssetLoader />
      <GamePlay />
    </>
  );
}
