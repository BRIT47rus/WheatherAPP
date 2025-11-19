import { Card } from './scripts/Card/Card.js';
import searchInputListener from './scripts/InputSearch/inputSearch.js';
import { store } from './scripts/store/store.js';

const data = store.getState();
window.addEventListener('load', () => {
  searchInputListener();

  const ulList = document.getElementById('weatherCards');
  if (!ulList) {
    console.error('Element with ID "weatherCards" not found.');
    return;
  }
  data.map((item) => {
    const list = Card.createCard(item);

    ulList.appendChild(list);
  });
});
