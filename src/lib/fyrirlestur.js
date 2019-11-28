import { youtubeContent, textContent, quoteContent } from './Contents';

let divMain;
let Title;
// let content;

let jsonFile;
let LContent;
let d = document;

export default function fyrirlestur() {
  jsonFile = JSON.parse(localStorage['json-file']);
  LContent = jsonFile['content'];

  divMain = d.querySelector('main');
  // content =
  Title = d.querySelector('h1');
  Title.appendChild(d.createTextNode(jsonFile['title']));

  // If site contains video
  // const isVideoPage = page.classList.contains('videoPlayer');

  

  for (let i = 0; i < LContent.length; i += 1) {
    if (LContent[i]['type'] == 'youtube') {
      youtubeContent(i);
    }
    else if (LContent[i]['type'] == 'text'){
      // textContent(i);
      textContent(i);

    } 
    else if (LContent[i]['type'] == 'quote'){
      quoteContent(i);
    }

    // } if else (LContent[i]['type'] == 'heading'){

    // } if else (LContent[i]['type'] == 'list'){

    // }
  }
  // if (isVideoPage){
  //   videoPlayer();
  // }
}

