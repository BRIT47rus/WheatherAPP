// @ts-check
/**
 * @typedef {object} DataCard
 * @property {string} id - id,
 * @property {string} title - текст заголока
 * @property {string} icon - путь к изображению
 * @property {string} value - ЗНАЧЕНИЕ,
 * @property {string} state - может быть пустым
 * @property {('percent'|'barometr'|'distance'|'time'|'speed')} typeState
 * @property {string} label
 */

/**
 * Для создания карточек
 * @class
 */
export class Card {
  /**
   * @method
   * @param {DataCard} data
   * @returns {HTMLElement} element - возвращаемая разметка
   */
  static createCard(data) {
    const li = this.#createNode('li', 'weather__card');
    const h3 = this.#createNode('h3', 'weather__card-title', data.title);
    li.appendChild(h3);
    const image = this.#createNode('img', 'icon-weather');
    image.setAttribute('src', data.icon);
    li.appendChild(image);
    const paragrafValue = this.#createNode('p', 'weather__card-value', data.value, data.label);
    li.appendChild(paragrafValue);
    const content = this.#createContent(data);
    li.appendChild(content);

    return li;
  }

  /**
   * @method
   * @param {keyof HTMLElementTagNameMap} element
   * @param {string} className - класс стилей
   * @param {string|number} [value=''] - содержимое
   * @returns {HTMLElement} node - возвращаемая разметка
   * @param {string} [label=""] - знак
   */
  static #createNode(element, className = '', value = '', label = '') {
    const node = document.createElement(element);
    if (className) {
      node.classList.add(className);
    }
    if (element !== 'img' && typeof value === 'string' && value.trim()) {
      node.textContent = value + ' ' + label;
    } else if (typeof value === 'number' || (typeof value === 'string' && value !== '')) {
      node.textContent = String(value);
    }
    return node;
  }

  /**
   * @method
   * Создает блок контента для карточки в зависимости от типа состояния
   * @param {DataCard} data
   * @returns {HTMLElement} contentElement
   */
  static #createContent(data) {
    const contentElement = this.#createNode('div', 'wheater__card-content');
    const stateElement = this.#createNode('div', 'weather__card-state', data.state);

    switch (data.typeState) {
      case 'barometr':
      case 'distance': {
        const isBarometr = data.typeState === 'barometr';
        const barElement = this.#createBarElement(isBarometr);
        const thumb = barElement.querySelector('.thumb');
        let possitionThumb = data.value;
        if (data.typeState == 'barometr') {
          possitionThumb = possitionThumb / 10;
        }
        if (thumb) {
          thumb.style.left = `${possitionThumb}%`;
        }
        contentElement.appendChild(barElement);
        contentElement.appendChild(stateElement);
        break;
      }
      case 'percent': {
        const barPercent = this.#createBarElement();
        contentElement.appendChild(barPercent);
        const percentDiv = this.#createNode('div', 'weather__card-percent');
        const spanPercntLeft = this.#createNode('span', '', '0%');
        const spanPercntRight = this.#createNode('span', '', '100%');
        const thumb = barPercent.querySelector('.thumb');
        thumb.style.left = `${data.value}%`;
        percentDiv.appendChild(spanPercntLeft);
        percentDiv.appendChild(spanPercntRight);

        contentElement.appendChild(percentDiv);
        break;
      }

      case 'time':
      case 'speed':
      default: {
        contentElement.appendChild(stateElement);
        break;
      }
    }
    return contentElement;
  }

  /**
   * Создает элемент прогресс-бара
   * @param {boolean} [isDanger=false] - Если true, добавляет элемент 'dangers'
   * @returns {HTMLElement}
   */
  static #createBarElement(isDanger = false) {
    const barElement = this.#createNode('div', 'weather__card-bar');

    if (isDanger) {
      const dangerDiv = this.#createNode('div', 'dangers');
      barElement.appendChild(dangerDiv);
    }

    const progressiveLineElement = this.#createNode('div', 'progress-line');
    const thumbElement = this.#createNode('div', 'thumb');

    progressiveLineElement.appendChild(thumbElement);
    barElement.appendChild(progressiveLineElement);
    return barElement;
  }
}
