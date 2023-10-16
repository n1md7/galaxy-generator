import * as store from '/src/store';
import { createEffect, createSignal } from 'solid-js';

export function useStage() {
  const [stage, setStage] = createSignal('00');

  const format = (stage: number) => {
    return stage.toString().padStart(2, '0');
  };

  createEffect(() => {
    setStage(format(store.stage()));
  }, [store.stage()]);

  return { stage };
}
