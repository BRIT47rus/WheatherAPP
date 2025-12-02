const pathSpriteSvg = '../../public/icons-sprite.svg';

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

function changeValueSearchInput(event, inputBTN, icon) {
  const value = event.target.value;

  if (value.trim()) {
    inputBTN.setAttribute('aria-label', 'Очистить поле поиска');
    icon.setAttribute('href', pathSpriteSvg + '#iconClose');
    inputBTN.setAttribute('tabindex', '0');
    console.log(value);
  } else {
    inputBTN.setAttribute('aria-label', 'Начать поиск');
    icon.setAttribute('href', pathSpriteSvg + '#iconSearch');
  }
}

export default function searchInputListener(input, inputBTN, icon) {
  input.addEventListener('input', (event) => changeValueSearchInput(event, inputBTN, icon));

  inputBTN.addEventListener('click', (event) => handleSearchButtonClick(icon, event, input));
}
