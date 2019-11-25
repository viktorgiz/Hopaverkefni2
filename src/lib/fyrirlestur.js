// import videoPlayer from './lib/videoPlayer';

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
      let videoContainer = d.createElement('div');
      let videoDiv = d.createElement('iframe');

      videoContainer.className = 'Fyrirlestur__Youtube__Container';
      videoDiv.className = 'Fyrirlestur__Youtube';

      videoContainer.appendChild(videoDiv);
      divMain.appendChild(videoContainer);
      videoDiv.src = LContent[i]['data'];
      videoDiv.frameborder = '0';
      videoDiv.allowfullscreen = '0';

    // } if else (LContent[i]['type'] == 'text'){
    //   let 
    // } if else (LContent[i]['type'] == 'quote'){

    // } if else (LContent[i]['type'] == 'heading'){

    // } if else (LContent[i]['type'] == 'list'){

    // }
  }
  // if (isVideoPage){
  //   videoPlayer();
  // }
}

