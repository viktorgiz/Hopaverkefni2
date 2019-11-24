import List, { toggle } from './lib/list';
// import fetchData from './lib/storage';
import fyrirlesturBirta from './lib/fyrirlestur';

document.addEventListener('DOMContentLoaded', () => {
  const page = document.querySelector('body');
  const isLecturePage = page.classList.contains('lecture-page');

  if (isLecturePage) {
    fyrirlesturBirta();
  } else {
    const list = new List();
    list.upploadClasses(JSON.parse(localStorage.getItem('json-file')));
    const filters = document.querySelector('button');
    filters.addEventListener('click', toggle);
  }
});
