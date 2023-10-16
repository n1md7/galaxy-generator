import { Show } from 'solid-js';
import * as store from '/src/store';

export function GamePlay() {
  return (
    <Show when={store.showGamePlay()}>
      <div class="center">
        <h1>Your GamePlay here</h1>
      </div>
    </Show>
  );
}
