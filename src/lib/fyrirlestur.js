import { youtubeContent, textContent, quoteContent, imageContent, headingContent, listContent, codeContent, Footer } from './Contents';
import { SaveContent, LoadContent, FyrirlesturBuinToggle, KlaradirFyrirlestrar, } from './storage';
let divMain;
let Title;
let divRow;
// let content;

let jsonSkra;
let LContent;
let d = document;

export default function fyrirlestur() {
  // jsonSkra = JSON.parse(localStorage["json-file"]);
  for (let i = 0; i < localStorage.length; i+=1 ){
    if(localStorage.key(i) !=='slug') {
      let X = JSON.parse(localStorage.getItem(localStorage.key(i)))['slug'];
      let Y = JSON.parse(localStorage.getItem('slug'));
      if (Y===X){
        jsonSkra = JSON.parse(localStorage.getItem(localStorage.key(i)));
        // Setjum nú gögnin í geymslu, svo við getum sótt þau þegar við 
        // förum í Content.js
        SaveContent(jsonSkra);
      }
    }
  }

  jsonSkra = LoadContent();
  LContent = jsonSkra['content'];

  let divMain = d.querySelector('main');
  divRow = d.createElement('div');

  divRow.className = 'FyrirlesturWidth';
  divMain.appendChild(divRow);

  // content =
  Title = d.querySelector('h1');
  Title.appendChild(d.createTextNode(jsonSkra['title']));

  // If site contains video
  // const isVideoPage = page.classList.contains('videoPlayer');

  

  for (let i = 0; i < LContent.length; i += 1) {
    if (LContent[i]['type'] == 'youtube') {
      youtubeContent(i);
    }
    else if (LContent[i]['type'] == 'text'){
      // textContent(i);
      textContent(i);
    } else if (LContent[i]['type'] == 'quote'){
      quoteContent(i);
    } else if (LContent[i]['type'] == 'image'){
      imageContent(i);
    } else if (LContent[i]['type'] == 'heading'){
      headingContent(i);
    } else if (LContent[i]['type'] == 'list'){
      listContent(i);
    }
    else if (LContent[i]['type'] == 'code'){
      codeContent(i);
    }
  }
  Footer();
  // if (isVideoPage){
  //   videoPlayer();
  // }
}
export function klaraFyrirlestur(event) {
  if ( event.target.className === 'Footer__KlaraFyrirlestur' ) {
    FyrirlesturBuinToggle();
  }
}
export function FaraAForsidu(event) {
  if ( event.target.className === 'Footer__Tilbaka' ) {
    KlaradirFyrirlestrar();
    window.location.replace('index.html');
  }
}

