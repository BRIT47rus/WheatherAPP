const searchInput = document.getElementById('searchInput');
const iconInput = document.getElementById('iconInput');

searchInput.addEventListener('input', (e) => {
  const { value } = e.target;
  if (value.trim()) {
    console.log(searchInput.parentElement);
    searchInput.parentElement.classList.add('activ-input');
    iconInput.setAttribute('href', '#iconClose');
  } else {
    searchInput.parentElement.classList.remove('activ-input');
    iconInput.setAttribute('href', '#iconSearch');
  }

  console.log(value);
});
