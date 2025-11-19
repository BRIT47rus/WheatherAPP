const searchInput = document.getElementById('searchInput');
const iconInput = document.getElementById('iconInput');
const searchInputButton = document.getElementById('searchInputButton');

function handleSearchButtonClick() {
  const currentIcon = iconInput.getAttribute('href');

  if (currentIcon === '#iconClose') {
    searchInput.value = '';
    changeValueSearchInput({ target: searchInput });
    searchInput.focus();
  } else {
    const searchText = searchInput.value.trim();
    if (searchText) {
      // Здесь должна быть логика отправки запроса
    } else {
      searchInput.focus();
    }
  }
}
const pathSpriteSvg = '../../public/icons-sprite.svg';
function changeValueSearchInput(event) {
  const value = event.target.value;

  if (value.trim()) {
    searchInputButton.setAttribute('aria-label', 'Очистить поле поиска');
    iconInput.setAttribute('href', pathSpriteSvg + '#iconClose');
    searchInputButton.setAttribute('tabindex', '0');
    console.log(value);
  } else {
    searchInputButton.setAttribute('aria-label', 'Начать поиск');
    iconInput.setAttribute('href', pathSpriteSvg + '#iconSearch');
  }
}

export default function searchInputListener() {
  searchInput.addEventListener('input', changeValueSearchInput);
  searchInputButton.addEventListener('click', handleSearchButtonClick);
}
