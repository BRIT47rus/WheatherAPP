import { Card } from './scripts/card/card.js';
import searchInputListener from './scripts/InputSearch/inputSearch.js';
import { forecastStore, store } from './scripts/store/store.js';
import { handleForecastTodayOrWeek, renderForecast } from './scripts/utils/utils.js';

const data = store.getState();

const searchInput = document.getElementById('searchInput');
const searchInputButton = document.getElementById('searchInputButton');
const iconInput = document.getElementById('iconInput');
const ulList = document.getElementById('weatherCards');
const ulSliderList = document.getElementById('slider__list');
const targetForecastSlider = document.getElementById('forecastSlider');

function renderDOM() {
  searchInputListener(searchInput, searchInputButton, iconInput);

  if (!ulList) {
    console.error('Element with ID "weatherCards" not found.');
  } else {
    data.map((item) => {
      const list = Card.createCard(item);
      ulList.appendChild(list);
    });
  }

  if (!ulSliderList) {
    console.error('Element with ID "weatherCards" not found.');
  } else {
    const dataToday = forecastStore.getState();
    renderForecast(dataToday['today'], ulSliderList);
  }
  targetForecastSlider.addEventListener('click', (e) => {
    const forecastData = forecastStore.getState();
    handleForecastTodayOrWeek(e, targetForecastSlider, ulSliderList, forecastData);
  });
}

renderDOM();
