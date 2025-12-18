const pathSpriteSvg = './public/icons-sprite.svg';

function handleSearchButtonClick(icon, event, input) {
  const currentIcon = icon.getAttribute('href').split(pathSpriteSvg)[1];
  if (currentIcon === '#iconClose') {
    input.value = '';
    changeValueSearchInput({ target: input }, event.target, icon);
    input.focus();
  } else {
    const searchText = input.value.trim();
    if (searchText) {
      console.log('Отправка запроса:', searchText);
    } else {
      input.focus();
    }
  }
}

function changeValueSearchInput(event, inputBTN, icon, input = null) {
  const value = event.target.value;
  const par = document.getElementById('header__search');
  console.log(event);
  if (value.trim()) {
    if (input) {
      par.classList.add('has-text');
    }
    inputBTN.setAttribute('aria-label', 'Очистить поле поиска');
    icon.setAttribute('href', pathSpriteSvg + '#iconClose');
    inputBTN.setAttribute('tabindex', '0');
    console.log(value);
  } else {
    par.classList.remove('has-text');
    inputBTN.setAttribute('aria-label', 'Начать поиск');
    icon.setAttribute('href', pathSpriteSvg + '#iconSearch');
    inputBTN.setAttribute('tabindex', '-1');
  }
}
function focusEvent(icon) {
  const currentIcon = icon.getAttribute('href').split(pathSpriteSvg)[1];

  if (currentIcon !== '#iconClose') {
    icon.setAttribute('href', pathSpriteSvg + '#iconClose');
  } else {
    icon.setAttribute('href', pathSpriteSvg + '#iconSearch');
  }
}

export default function searchInputListener(input, inputBTN, icon) {
  input.addEventListener('input', (event) => changeValueSearchInput(event, inputBTN, icon, input));
  input.addEventListener('focus', () => focusEvent(icon));
  input.addEventListener('blur', () => focusEvent(icon));
  inputBTN.addEventListener('click', (event) => handleSearchButtonClick(icon, event, input));
}
