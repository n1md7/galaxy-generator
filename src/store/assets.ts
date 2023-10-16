import { createSignal } from 'solid-js';
export const [showLoader, setShowLoader] = createSignal(false);
export const [loaderProgress, setLoaderProgress] = createSignal(0);
