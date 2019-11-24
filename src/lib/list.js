// import empty from './helpers';
const d = document;
const LOCALSTORAGE_KEY = 'json-file';
export default class List {
  constructor(gogn, i) {
    this.container = document.querySelector('.list');
    this.load();
    this.upploadClasses(gogn);
    this.CreateLecture(gogn, i);
  }
  load() {
    fetchData();
 

    // empty(this.container);
  }

  upploadClasses(gogn) {
    if (gogn) {
      const page = document.querySelector('body');
      let booleanHtml = page.classList.contains('button__html');
      let booleanCss = page.classList.contains('button__css');
      let booleanJs = page.classList.contains('button__js');

      // Enginn er active eða allir active
      let AllActive = Boolean(booleanHtml === booleanCss && booleanCss === booleanJs);

      for (let i = 0; i < gogn['lectures'].length; i++) {
        if (booleanHtml || AllActive) {
          this.CreateLecture(gogn, i);
        } else if (booleanCss || AllActive) {
          this.CreateLecture(gogn, i);
        } else if (booleanJs || AllActive) {
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
      let Lecture = gogn['lectures'][i];
      // ===========================

      const div_class = d.createElement('div');
      div_class.className = 'list__col listItem';
      this.container.appendChild(div_class);

      const LImage = d.createElement('img');
      const LBot = d.createElement('div');
      const LCategory = d.createElement('p');
      const LTitle = d.createElement('h2');

      LImage.className = 'listItem__image';
      LBot.className = 'listItem__bottom';
      LCategory.className = 'listItem__category';
      LTitle.className = 'list';

      try {
        LImage.src = Lecture["thumbnail"];
      }
      catch{

      }
      LCategory.appendChild(d.createTextNode(Lecture["category"]));
      LTitle.appendChild(d.createTextNode(Lecture["title"]));

      div_class.appendChild(LImage);
      div_class.appendChild(LBot);

      LBot.appendChild(LCategory);
      LBot.appendChild(LTitle);
    }
  }


}
export function fetchData() {
  fetch('../lectures.json')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Villa við að sækja gögn');
    })
    .then( (data) => {
      // List.upploadClasses(data);
      localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data))
    });

}
export function toggle(e) {
  e.preventDefault();
  const Html__button = d.getElementsByClassName('Html');
  const Css__button = d.getElementsByClassName('Css');
  const Js__button = d.getElementsByClassName('Javascript');

  Html__button.addEventListener('click', () => {
    Html__button.className = 'button__html';
  });
  Css__button.addEventListener('click', () => {
    Css__button.className = 'button__css';
  });
  Js__button.addEventListener('click', () => {
    Js__button.className = 'button__javascript';
  });
}
