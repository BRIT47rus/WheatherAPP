import { Forecast } from '../Forecast/Forecast.js';

let typeDataForecast = 'today';

/**
 * @param {Event} event
 */
export const handleForecastTodayOrWeek = (event, container, listContainer, forecastData) => {
  const { target } = event;
  const dataCategory = target.dataset.forecast;
  if (!dataCategory || target.tagName !== 'BUTTON') {
    return;
  }
  if (dataCategory === 'today') {
    target.classList.add('active-button');
    const weekButton = container.querySelector("[data-forecast='week']");
    typeDataForecast = 'today';
    listContainer.innerHTML = '';
    renderForecast(forecastData[typeDataForecast], listContainer);
    if (weekButton) {
      weekButton.classList.remove('active-button');
    }
  } else if (dataCategory === 'week') {
    target.classList.add('active-button');
    const todayButton = container.querySelector("[data-forecast='today']");
    typeDataForecast = 'week';
    listContainer.innerHTML = '';
    renderForecast(forecastData[typeDataForecast], listContainer);
    if (todayButton) {
      todayButton.classList.remove('active-button');
    }
  }
};

const createForeCastList = (container, data) => {
  container.append(Forecast.createElement(data));
};

export const renderForecast = (data, container) => {
  data.map((li) => {
    createForeCastList(container, li);
  });
};
