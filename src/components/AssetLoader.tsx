import { useProgress } from '/src/components/hooks/useProgress';
import { useStage } from '/src/components/hooks/useStage';
import { Show } from 'solid-js';
import * as store from '/src/store';

export function AssetLoader() {
  const { stage } = useStage();
  const { progress } = useProgress();

  return (
    <Show when={store.showLoader()}>
      <div class="center">
        <h1>Stage {stage()}</h1>
        <h2>Loading...</h2>
        <h3>{progress()}</h3>
      </div>
    </Show>
  );
}
