let d = document;
let jsonFile = JSON.parse(localStorage['json-file']);
let LContent = jsonFile['content'];
let divRow;

export function youtubeContent(i) {
    let youtubeContent = d.createElement('div');
    let video1 = d.createElement('div');
    let video2 = d.createElement('iframe');

    divRow = d.getElementsByClassName('FyrirlesturWidth')[0];

    youtubeContent.className = 'Content__youtube Content__padding';
    video1.className = 'Content__video1';
    video2.className = 'Content__video2';

    youtubeContent.appendChild(video1);
    video1.appendChild(video2);
    divRow.appendChild(youtubeContent);
    video2.src = LContent[i]['data'];
    video2.frameborder = '0';
    video2.allowfullscreen = '0';
}

export function textContent(i){
    divRow = d.getElementsByClassName('FyrirlesturWidth')[0];
    let textContainer = d.createElement('div');
    let paragraphs = LContent[i]['data'].split('\n');
    for (let i = 0; i < paragraphs.length; i+=1 ){
        let textp = d.createElement('p');
        let textnode = d.createTextNode(paragraphs[i]);

        textContainer.className = 'Content__text Content__padding';

        divRow.appendChild(textContainer);
        textContainer.appendChild(textp);
        textp.appendChild(textnode);
    }
}

export function quoteContent(i){
    divRow = d.getElementsByClassName('FyrirlesturWidth')[0];
    // <Div>
    let quoteContent = d.createElement('div');
    // <quote> og <caption>
    let quote = d.createElement('quote');
    let caption = d.createElement('caption');
    // <textNodes>
    let quoteNode = d.createTextNode(LContent[i]['data']);
    let captionNode = d.createTextNode(LContent[i]['caption']);

    quoteContent.className = 'Content__quoteContainer Content__padding';
    quote.className = 'Content__quote';
    caption.className = 'Content__caption';

    divRow.appendChild(quoteContent);
    quoteContent.appendChild(quote);
    quoteContent.appendChild(caption);
    quote.appendChild(quoteNode);
    caption.appendChild(captionNode);
}

export function imageContent(i) {
    divRow = d.getElementsByClassName('FyrirlesturWidth')[0];
    let imageContent = d.createElement('div');

    let image = d.createElement('img');
    let caption = d.createElement('caption');

    let captionNode = d.createTextNode(LContent[i]['caption']);
    caption.appendChild(captionNode);

    image.src = LContent[i]['data'];
    imageContent.className = 'Content__imageContainer Content__padding';
    image.className = 'Content__image';
    caption.className = 'Content__captionImg';

    divRow.appendChild(imageContent);
    imageContent.appendChild(image);
    imageContent.appendChild(caption);
}
export function headingContent(i){
    divRow = d.getElementsByClassName('FyrirlesturWidth')[0];
    let headingContent = d.createElement('div');
    let heading = d.createElement('h2');
    let headingNode = d.createTextNode(LContent[i]['data']);

    headingContent.className ='Content__heading Content__padding'

    heading.appendChild(headingNode);
    headingContent.appendChild(heading);
    divRow.appendChild(headingContent);

}
export function listContent(i){
    divRow = d.getElementsByClassName('FyrirlesturWidth')[0];
    let listContent = d.createElement('div');
    let listUl = d.createElement('ul');
    
    listContent.className = 'Content__list Content__padding';

    listContent.appendChild(listUl);
    divRow.appendChild(listContent);

    for (let j = 0; j<LContent[i]['data'].length; j+=1){
        let listUl = d.getElementsByClassName('FyrirlesturWidth')[0].children[i].children[0];
        let itemLi = d.createElement('li');
        let itemNode = d.createTextNode(LContent[i]['data'][j]);
        
        itemLi.className = 'Content__listItem';
        itemLi.appendChild(itemNode);
        listUl.appendChild(itemLi);

    }
}
export function codeContent(i) {
    divRow = d.getElementsByClassName('FyrirlesturWidth')[0];
    let codeContent = d.createElement('div');
    codeContent.className = 'Content__codeContainer Content__padding';
    divRow.appendChild(codeContent);    
    let paragraphs = LContent[i]['data'].split('\n');
    
    for (let j = 0; j < paragraphs.length; j+=1 ) {
        let code = d.createElement('p');
        let textNode = d.createTextNode(paragraphs[j]);
        if (textNode.wholeText === ''){
            code.className = 'Content__padding';
        }
        else{
            code.className = 'Content__code'
        }
        code.appendChild(textNode);
        codeContent.appendChild(code);

    }    

}
export function Footer() {
    divRow = d.getElementsByClassName('FyrirlesturWidth')[0];
    let klaraContent = d.createElement('div');
    klaraContent.className = 'Footer__Container Content__padding';
    divRow.appendChild(klaraContent);

    let text1 = d.createElement('p');
    let link1 = d.createElement('a');
    let node1 = d.createTextNode('Klára fyrirlestur');
    text1.appendChild(link1.appendChild(node1));
    text1.className = 'Footer__KlaraFyrirlestur';

    let text2 = d.createElement('p');
    let link2 = d.createElement('a');
    let node2 = d.createTextNode('Tilbaka');
    text2.appendChild(link2.appendChild(node2));
    text2.className ='Footer__Tilbaka';

    klaraContent.appendChild(text1);
    klaraContent.appendChild(text2);   

}