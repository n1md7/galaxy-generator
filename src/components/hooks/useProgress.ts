import * as store from '/src/store';
import { createEffect, createSignal } from 'solid-js';

export function useProgress() {
  const [progress, setProgress] = createSignal('0.00%');

  const format = (progress: number) => {
    return progress.toFixed(2) + '%';
  };

  createEffect(() => {
    setProgress(format(store.loaderProgress()));
  }, [store.loaderProgress()]);

  return { progress };
}
