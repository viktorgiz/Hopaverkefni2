import List from './lib/list';
import toggle from './lib/toggle';
// import fetchData from './lib/storage';
import fyrirlesturBirta from './lib/fyrirlestur';


document.addEventListener('DOMContentLoaded', () => {
  const page = document.querySelector('body');
  const isLecturePage = page.classList.contains('lecture-page');

  if (isLecturePage) {
    fyrirlesturBirta();
  } else {
    const list = new List();
    toggle();
    list.upploadClasses(JSON.parse(localStorage.getItem('json-file')));  
  }
});
