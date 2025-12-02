/**
 * @typedef {object} ForecastDB
 * @property {string} time
 * @property {string} icon
 * @property {string} temperature
 */
/**
 * @class
 */
export class Forecast {
  constructor() {}

  /**
   * @method
   * @param {ForecastDB} db
   */
  static createElement(db) {
    if (db) {
      const spanTime = this.#createNode('span', 'slider__list-time', db.time);
      const img = this.#createNode('img', '', '', db.icon);
      const spanTemperature = this.#createNode('span', 'slider__list-temperature', db.temperature);
      const arr = [spanTime, img, spanTemperature];
      const li = this.#createNode('li', 'slider__list-element', '', '', arr);
      return li;
    }
    return '';
  }
  /**
   *@method
   * @param {keyof HTMLElementTagNameMap} element
   * @param {CSSPropertyRule} className
   * @param {string} value
   * @param {string} src
   * @param {HTMLElement} children
   */
  static #createNode(element, className = '', value = '', src = '', children) {
    const node = document.createElement(element);
    if (className) {
      node.classList.add(className);
    }
    if (value) {
      node.textContent = value;
    }
    if (src) {
      node.setAttribute('src', src);
      node.setAttribute('width', 32);
      node.setAttribute('height', 32);
    }
    if (children) {
      node.append(...children);
    }
    return node;
  }
}
