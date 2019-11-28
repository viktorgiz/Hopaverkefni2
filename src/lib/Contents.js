let d = document;
let jsonFile = JSON.parse(localStorage['json-file']);
let LContent = jsonFile['content'];
let divMain = d.querySelector('main');

export function youtubeContent(i) {
    let youtubeContent = d.createElement('div');
    let videoDiv = d.createElement('iframe');
  
    youtubeContent.className = 'Content__youtube';
    videoDiv.className = 'Content__video';
  
    youtubeContent.appendChild(videoDiv);
    divMain.appendChild(youtubeContent);
    videoDiv.src = LContent[i]['data'];
    videoDiv.frameborder = '0';
    videoDiv.allowfullscreen = '0';
}
export function textContent(i){
    let textContainer = d.createElement('div');
    let paragraphs = LContent[i]['data'].split('\n');
    for (let i = 0; i < paragraphs.length; i+=1 ){
        let textp = d.createElement('p');
        let textnode = d.createTextNode(paragraphs[i]);

        textContainer.className = 'Content__text';

        divMain.appendChild(textContainer);
        textContainer.appendChild(textp);
        textp.appendChild(textnode);
    }
}
export function quoteContent(i){
    // <Div>
    let quoteContent = d.createElement('div');
    // <quote> og <caption>
    let quote = d.createElement('quote');
    let caption = d.createElement('caption');
    // <textNodes>
    let quoteNode = d.createTextNode(LContent[i]['data']);
    let captionNode = d.createTextNode(LContent[i]['caption']);

    quoteContent.className = 'Content__quoteContainer';
    quote.className = 'Content__quote';
    caption.className = 'Content__caption';

    divMain.appendChild(quoteContent);
    quoteContent.appendChild(quote);
    quoteContent.appendChild(caption);
    quote.appendChild(quoteNode);
    caption.appendChild(captionNode);
}
