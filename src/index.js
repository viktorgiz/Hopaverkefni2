import List, {empty, fyrirlesturBirta} from './lib/list';
import toggle from './lib/toggle';
// import fetchData from './lib/storage';
import fyrirlestur, { klaraFyrirlestur, FaraAForsidu } from './lib/fyrirlestur';

let jsonList;

document.addEventListener('DOMContentLoaded', () => {
  window.load = function() {
    this.localStorage.clear;
  }


  const page = document.querySelector('body');
  const isLecturePage = page.classList.contains('lecture-page');

  if (isLecturePage) {
    fyrirlestur();
    document.addEventListener('click', ()=>{
      klaraFyrirlestur(event);
      FaraAForsidu(event);
      
    })
  } else {
    const list = new List();

    jsonList = JSON.parse(localStorage.getItem('json-file'));
 
    document.addEventListener('click', ()=>{
      toggle(event);
      empty(list.container);
      list.upploadClasses(jsonList);
      fyrirlesturBirta(event);
    });
  }
});
