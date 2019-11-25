// import empty from './helpers';
const d = document;
const LOCALSTORAGE_KEY = 'json-file';
let Html__button;
let Css__button;
let Js__button;
export default class List {
  constructor(gogn, i) {
    this.container = document.querySelector('.list__row');
    this.fetchData();
    this.upploadClasses(gogn);
    this.CreateLecture(gogn, i);
  }

  upploadClasses(gogn) {
    if (gogn) {
      Html__button = d.getElementsByClassName('Html');
      Css__button = d.getElementsByClassName('Css');
      Js__button = d.getElementsByClassName('JavaScript');
      const booleanHtml = Boolean(Html__button[0].className === 'filters__filter Html button__html');
      const booleanCss = Boolean(Css__button[0].className === 'filters__filter Css button__css');
      const booleanJs = Boolean(Js__button[0].className === 'filters__filter JavaScript button__js');

      // Enginn er active eða allir active
      const AllActive = Boolean(booleanHtml === booleanCss && booleanCss === booleanJs);

      for (let i = 0; i < gogn.lectures.length; i += 1) {
        if ((booleanHtml && gogn.lectures[i].category === 'html') || AllActive) {
          this.CreateLecture(gogn, i);
        } else if ((booleanCss && gogn.lectures[i].category === 'css') || AllActive) {
          this.CreateLecture(gogn, i);
        } else if ((booleanJs && gogn.lectures[i].category === 'javascript') || AllActive) {
          this.CreateLecture(gogn, i);
        }
      }
    }
  }

  CreateLecture(gogn, i) {
    if (gogn) {
      // ===== ATH ATH ATH =========
      // > data["lectures"]
      //  v (13) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
      //  > 0 : {slug: "html-sagan", title: "Sagan", category: "html", image: "img/code.jpg", thumbnail: "img/thumb1.jpg", …}
      //  > 1 : {slug: "html-element", title: "Element", category: "html", image: "img/code2.jpg", content: Array(17)}
      //  ...
      const Lecture = gogn.lectures[i];
      // ===========================

      const div_class = d.createElement('div');
      div_class.className = 'list__col';
      this.container.appendChild(div_class);

      const LImage = d.createElement('img');
      const LBot = d.createElement('div');
      const LCategory = d.createElement('p');
      const LTitle = d.createElement('h2');
      const LRammi = d.createElement('div');

      LImage.className = 'listItem__image';
      LBot.className = 'listItem__bottom';
      LCategory.className = 'listItem__category';
      LTitle.className = 'list';
      LRammi.className = 'listItem';
      LRammi.id = Lecture['slug'];

      if (Lecture.thumbnail) {
        LImage.src = Lecture.thumbnail;
      } else {
        LImage.className = 'listItem__image no__image';
      }
      LCategory.appendChild(d.createTextNode(Lecture.category));
      LTitle.appendChild(d.createTextNode(Lecture.title));

      LRammi.appendChild(LImage);
      LRammi.appendChild(LBot);

      LBot.appendChild(LCategory);
      LBot.appendChild(LTitle);

      div_class.appendChild(LRammi);
    }
  }
  fetchData() {
    fetch('lectures.json')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Villa við að sækja gögn');
      })
      .then((data) => {
        // List.upploadClasses(data);
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
        this.upploadClasses(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
      });
  }
}


export function empty(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

export function fyrirlesturBirta(element) {
  let fyrirlestrar = d.getElementsByClassName('listItem');
  for (let i = 0; i < fyrirlestrar.length; i += 1) {
    if (element.target.parentElement.id === fyrirlestrar[i].id){
      let data = JSON.parse(localStorage["json-file"])['lectures'][i];
      localStorage.clear();
      localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
      window.location.replace('fyrirlestur.html');
    }

  }
}
