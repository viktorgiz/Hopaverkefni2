const d = document;
let HtmlButton;
let CssButton;
let JsButton;
export default class List {
  constructor(gogn, i) {
    this.container = document.querySelector('.list__row');
    this.fetchData();
    this.upploadClasses(gogn);
    this.CreateLecture(gogn, i);
  }

  upploadClasses(gogn) {
    if (gogn) {
      HtmlButton = d.getElementsByClassName('Html');
      CssButton = d.getElementsByClassName('Css');
      JsButton = d.getElementsByClassName('JavaScript');
      const booleanHtml = Boolean(HtmlButton[0].className === 'filters__filter Html button__html');
      const booleanCss = Boolean(CssButton[0].className === 'filters__filter Css button__css');
      const booleanJs = Boolean(JsButton[0].className === 'filters__filter JavaScript button__js');

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
        // Mikilvægt, hér er búið til lykil fyrir hvern fyrirlestur í localstorage,
        // í honum er fylki sem inniheldur alla fyrirlestranna
        const ItemKey = gogn.lectures[i].slug;
        const Fyrirlestur = JSON.stringify(gogn.lectures[i]);
        localStorage.setItem(ItemKey, Fyrirlestur);
      }
    }
  }

  CreateLecture(gogn, i) {
    if (gogn) {
      // ===== ATH ATH ATH =========
      // > data["lectures"]
      //  v (13) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}
      //  > 0 : {slug: "html-sagan", title: "Sagan", category:
      //  > 1 : {slug: "html-element", title: "Element", cat
      //  ...
      const Lecture = gogn.lectures[i];
      // ===========================

      const DivClass = d.createElement('div');
      DivClass.className = 'list__col';
      this.container.appendChild(DivClass);

      let LImage = d.createElement('img');
      const LBot = d.createElement('div');
      const LBotV = d.createElement('div');
      const LBotH = d.createElement('div');
      const LCategory = d.createElement('p');
      const LTitle = d.createElement('h2');
      const LRammi = d.createElement('div');

      LImage.className = 'listItem__image';
      LBot.className = 'listItem__bottom';
      LBotV.className = 'listItem__bottomV';
      LBotH.className = 'listItem__bottomH';

      LCategory.className = 'listItem__category';
      LTitle.className = 'listItem__title';
      LRammi.className = 'listItem';
      LRammi.id = Lecture.slug;

      if (Lecture.thumbnail) {
        LImage.src = Lecture.thumbnail;
      } else {
        LImage = d.createElement('div');
        LImage.className = 'listItem__image no__image';
      }
      LCategory.appendChild(d.createTextNode(Lecture.category));
      LTitle.appendChild(d.createTextNode(Lecture.title));


      LRammi.appendChild(LImage);
      LRammi.appendChild(LBot);

      LBotV.appendChild(LCategory);
      LBotV.appendChild(LTitle);

      LBot.appendChild(LBotV);
      LBot.appendChild(LBotH);

      DivClass.appendChild(LRammi);

      if (JSON.parse(localStorage.getItem('BunirFyrirlestrar')) !== null) {
        const Fyrirlestrar = JSON.parse(localStorage.getItem('BunirFyrirlestrar'));
        for (i in Fyrirlestrar) {
          if (Lecture.slug === i) {
            if (Fyrirlestrar[i] === 'Klarad') {
              LBotH.appendChild(d.createTextNode('✓'));
            }
          }
        }
      }
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
        localStorage.setItem('json-file', JSON.stringify(data));
        this.upploadClasses(JSON.parse(localStorage.getItem('json-file')));
      });
  }
}


export function empty(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

export function fyrirlesturBirta(element) {
  const fyrirlestrar = d.getElementsByClassName('listItem');
  for (let i = 0; i < fyrirlestrar.length; i += 1) {
    if ((element.target.parentElement.id === fyrirlestrar[i].id)
         || (element.target.id === fyrirlestrar[i].id)) {
      // setum inn slug á völdum fyrirlestri inní localStorage
      // sem nýjan lykil þ.a. þegar við opnum fyrirlestur.html,
      // þá vitum við hvaða hvaða upplýsingar við eigum að nota
      let fyrirlesturSlug;
      if (element.target.parentElement.id === fyrirlestrar[i].id) {
        fyrirlesturSlug = element.target.parentElement.id;
      } else if (element.target.id === fyrirlestrar[i].id) {
        fyrirlesturSlug = element.target.id;
      }
      localStorage.setItem('slug', JSON.stringify(fyrirlesturSlug));
      window.location.replace('fyrirlestur.html');
    }
  }
}
