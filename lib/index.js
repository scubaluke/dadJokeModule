import { jokeHolder } from './elements.js';
// named export (we can have lots of these)
export async function fetchJoke() {
  // turn  loader on
  // loader.classList.remove('hidden');
  jokeHolder.innerHTML = ` <div class="lds-ellipsis loader ">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>`;

  const response = await fetch('https://icanhazdadjoke.com', {
    headers: {
      Accept: 'application/json',
    },
  });
  const data = response.json();
  // turn loader off
  // loader.classList.add('hidden');
  return data;
}
