const initialState = [
  {
    id: '1',
    title: 'Влажность',
    icon: './public/images/detailsIcons/humidity.svg',
    value: '75',
    state: '',
    label: '%',
    typeState: 'percent',
    minValue: 0,
    maxValue: 100,
  },
  {
    id: '2',
    title: 'Давление',
    icon: './public/images/detailsIcons/barometr.svg',
    value: '761',
    state: 'Повышенное',
    label: '',
    typeState: 'barometr',
    minValue: 600,
    maxValue: 812,
  },
  {
    id: '3',
    title: 'Видимость',
    icon: './public/images/detailsIcons/visibility.svg',
    value: '28',
    state: 'Нормальная',
    label: 'км',
    typeState: 'distance',
    minValue: 0,
    maxValue: 100,
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
const futureWheather = {
  today: [
    { time: '12:00', icon: './public/images/weaterIcon/cloudly.svg', temperature: '-7' },
    { time: '15:00', icon: './public/images/weaterIcon/cloudly.svg', temperature: '-5' },
    { time: '18:00', icon: './public/images/weaterIcon/cloudly.svg', temperature: '-7' },
    { time: '21:00', icon: './public/images/weaterIcon/cloudly.svg', temperature: '-9' },
    { time: '00:00', icon: './public/images/weaterIcon/cloudly.svg', temperature: '-11' },
    { time: '00:00', icon: './public/images/weaterIcon/cloudly.svg', temperature: '-11' },
    { time: '00:00', icon: './public/images/weaterIcon/cloudly.svg', temperature: '-11' },
    { time: '00:00', icon: './public/images/weaterIcon/cloudly.svg', temperature: '-11' },
    { time: '00:00', icon: './public/images/weaterIcon/cloudly.svg', temperature: '-11' },
  ],
  week: [
    {
      time: 'Вс, 07 янв.',
      icon: './public/images/weaterIcon/dayIcon/lowSunCloud.svg',
      temperature: 'от -17° до -11',
    },
    {
      time: 'Пн, 08 янв.',
      icon: './public/images/weaterIcon/dayIcon/lowSunCloud.svg',
      temperature: 'от -16° до -8',
    },
    {
      time: 'Вт, 09 янв.',
      icon: './public/images/weaterIcon/cloudly.svg',
      temperature: 'от -8° до -2',
    },
    {
      time: 'Ср, 10 янв.',
      icon: './public/images/weaterIcon/cloudly.svg',
      temperature: 'от -17° до -11',
    },
  ],
};

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
export const forecastStore = new Store(futureWheather);
