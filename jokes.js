import 'regenerator-runtime/runtime';

import { handleClick } from './lib/handlers.js';

import { jokeButton } from './lib/elements.js';

jokeButton.addEventListener('click', handleClick);
