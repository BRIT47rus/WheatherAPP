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
  /**
   * @method
   * @param {ForecastDB} db
   */
  static createElement(db) {
    if (db) {
      const time = this.#createNode('time', null, db.time, null, [], { datetime: db.time });
      const spanTime = this.#createNode('span', 'slider__list-time', null, null, [time]);

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
  static #createNode(element, className = '', value = '', src = '', children = [], atributes = {}) {
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
    if (children.length > 0) {
      node.append(...children);
    }
    if (atributes) {
      for (let [key, value] of Object.entries(atributes)) {
        node.setAttribute(key, value);
      }
    }
    return node;
  }
}
