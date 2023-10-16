import { Main } from '/src/Main';
import { render } from 'solid-js/web';
import env from '/src/common/Env';

console.info('Is development mode:', env.isDevelopment());

render(() => <Main />, document.body);
