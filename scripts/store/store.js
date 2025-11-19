const initialState = [
  {
    id: '1',
    title: 'Влажность',
    icon: './public/images/detailsIcons/humidity.svg',
    value: '75',
    state: '',
    label: '%',
    typeState: 'percent',
  },
  {
    id: '2',
    title: 'Давление',
    icon: './public/images/detailsIcons/barometr.svg',
    value: '761',
    state: 'Повышенное',
    label: '',
    typeState: 'barometr',
  },
  {
    id: '3',
    title: 'Видимость',
    icon: './public/images/detailsIcons/visibility.svg',
    value: '28',
    state: 'Нормальная',
    label: 'км',
    typeState: 'distance',
  },
  {
    id: '4',
    title: 'Рассвет',
    icon: './public/images/detailsIcons/sunrise.svg',
    value: '8:42',
    state: 'Прошло: 02:47',
    label: '',
    typeState: 'time',
  },
  {
    id: '5',
    title: 'Закат',
    icon: './public/images/detailsIcons/sunset.svg',
    value: '16:37',
    state: 'Осталось: 05:08',
    label: '',
    typeState: 'time',
  },
  {
    id: '6',
    title: 'Сила ветра',
    icon: './public/images/detailsIcons/arrow.svg',
    value: '2',
    state: 'Северо-западный',
    label: 'м/с',
    typeState: 'speed',
  },
];

/**
 * @class
 * Хранилище данных о погоде.
 */
export class Store {
  /** @type { typeof initialState} state  - */
  #state;
  /**
   * @constructor
   * @param {typeof initialState} initialStateData
   */
  constructor(initialStateData = initialState) {
    this.#state = initialStateData;
  }

  getState() {
    return this.#state;
  }

  setState(updater) {
    const newState = updater(this.#state);
    this.#state = newState;
  }

  static updateState(currentState, callback) {
    return callback(currentState);
  }
}
export const store = new Store(initialState);
