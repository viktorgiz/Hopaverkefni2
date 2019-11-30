import {
  youtubeContent, textContent, quoteContent, imageContent, headingContent, listContent, codeContent, Footer, GraentEdaEkki,
} from './Contents';
import { SaveContent, LoadContent, FyrirlesturBuinToggle } from './storage';

let divMain;
let Header;
let divRow;
// let content;

let jsonSkra;
let LContent;
const d = document;

export default function fyrirlestur() {
  // jsonSkra = JSON.parse(localStorage["json-file"]);
  for (let i = 0; i < localStorage.length; i += 1) {
    if ((localStorage.key(i) !== 'slug') && (localStorage.key(i) !== 'BunirFyrirlestrar')) {
      const X = JSON.parse(localStorage.getItem(localStorage.key(i))).slug;
      const Y = JSON.parse(localStorage.getItem('slug'));
      if (Y === X) {
        jsonSkra = JSON.parse(localStorage.getItem(localStorage.key(i)));
        // Setjum nú gögnin í geymslu, svo við getum sótt þau þegar við
        // förum í Content.js
        SaveContent(jsonSkra);
      }
    }
  }

  jsonSkra = LoadContent();
  LContent = jsonSkra.content;

  const divMain = d.querySelector('main');
  divRow = d.createElement('div');

  divRow.className = 'FyrirlesturWidth';
  divMain.appendChild(divRow);

  // content =
  const header = d.querySelector('header');
  const span = d.createElement('span');
  const h1 = d.createElement('h1');

  span.className = 'heading__category';
  h1.className = 'heading__title';

  header.appendChild(span);
  header.appendChild(h1);
  span.appendChild(d.createTextNode(jsonSkra.category));
  h1.appendChild(d.createTextNode(jsonSkra.title));

  // If site contains video
  // const isVideoPage = page.classList.contains('videoPlayer');


  for (let i = 0; i < LContent.length; i += 1) {
    if (LContent[i].type === 'youtube') {
      youtubeContent(i);
    } else if (LContent[i].type === 'text') {
      // textContent(i);
      textContent(i);
    } else if (LContent[i].type === 'quote') {
      quoteContent(i);
    } else if (LContent[i].type === 'image') {
      imageContent(i);
    } else if (LContent[i].type === 'heading') {
      headingContent(i);
    } else if (LContent[i].type === 'list') {
      listContent(i);
    } else if (LContent[i].type === 'code') {
      codeContent(i);
    }
  }
  Footer();
  GraentEdaEkki();
  // if (isVideoPage){
  //   videoPlayer();
  // }
}
export function klaraFyrirlestur(event) {
  if ((event.target.className === 'Footer__KlaraFyrirlestur') || (event.target.className === 'Footer__KlaraFyrirlestur Footer__FyrirlesturBuinn')) {
    FyrirlesturBuinToggle();
    GraentEdaEkki();
  }
}
export function FaraAForsidu(event) {
  if (event.target.className === 'Footer__Tilbaka') {
    window.location.replace('index.html');
  }
}
