import { LoadContent } from './storage';

const d = document;
// let jsonFile = JSON.parse(localStorage['json-file']);
let divRow;

export function youtubeContent(i) {
  const LContent = LoadContent().content;

  const YtContent = d.createElement('div');
  const video1 = d.createElement('div');
  const video2 = d.createElement('iframe');

  divRow = d.getElementsByClassName('FyrirlesturWidth')[0];

  YtContent.className = 'Content__youtube Content__padding';
  video1.className = 'Content__video1';
  video2.className = 'Content__video2';

  YtContent.appendChild(video1);
  video1.appendChild(video2);
  divRow.appendChild(YtContent);
  video2.src = LContent[i].data;
  video2.frameborder = '0';
  video2.allowfullscreen = '0';
}

export function textContent(i) {
  const LContent = LoadContent().content;

  divRow = d.getElementsByClassName('FyrirlesturWidth')[0];
  const textContainer = d.createElement('div');
  const paragraphs = LContent[i].data.split('\n');
  for (let j = 0; j < paragraphs.length; j += 1) {
    const textp = d.createElement('p');
    const textnode = d.createTextNode(paragraphs[j]);

    textContainer.className = 'Content__text Content__padding';

    divRow.appendChild(textContainer);
    textContainer.appendChild(textp);
    textp.appendChild(textnode);
  }
}

export function quoteContent(i) {
  const LContent = LoadContent().content;

  divRow = d.getElementsByClassName('FyrirlesturWidth')[0];
  // <Div>
  const quoteContent = d.createElement('div');
  // <quote> og <caption>
  const quote = d.createElement('quote');
  const caption = d.createElement('caption');
  // <textNodes>
  const quoteNode = d.createTextNode(LContent[i].data);
  const captionNode = d.createTextNode(LContent[i].caption);

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
  const LContent = LoadContent().content;

  divRow = d.getElementsByClassName('FyrirlesturWidth')[0];
  const imageContent = d.createElement('div');

  const image = d.createElement('img');
  const caption = d.createElement('caption');

  const captionNode = d.createTextNode(LContent[i].caption);
  caption.appendChild(captionNode);

  image.src = LContent[i].data;
  imageContent.className = 'Content__imageContainer Content__padding';
  image.className = 'Content__image';
  caption.className = 'Content__captionImg';

  divRow.appendChild(imageContent);
  imageContent.appendChild(image);
  imageContent.appendChild(caption);
}
export function headingContent(i) {
  const LContent = LoadContent().content;

  divRow = d.getElementsByClassName('FyrirlesturWidth')[0];
  const headingContent = d.createElement('div');
  const heading = d.createElement('h2');
  const headingNode = d.createTextNode(LContent[i].data);

  headingContent.className = 'Content__heading Content__padding';

  heading.appendChild(headingNode);
  headingContent.appendChild(heading);
  divRow.appendChild(headingContent);
}
export function listContent(i) {
  const LContent = LoadContent().content;

  divRow = d.getElementsByClassName('FyrirlesturWidth')[0];
  const listContent = d.createElement('div');
  const listUl = d.createElement('ul');

  listContent.className = 'Content__list Content__padding';

  listContent.appendChild(listUl);
  divRow.appendChild(listContent);

  for (let j = 0; j < LContent[i].data.length; j += 1) {
    const listUl = d.getElementsByClassName('FyrirlesturWidth')[0].children[i].children[0];
    const itemLi = d.createElement('li');
    const itemNode = d.createTextNode(LContent[i].data[j]);

    itemLi.className = 'Content__listItem';
    itemLi.appendChild(itemNode);
    listUl.appendChild(itemLi);
  }
}
export function codeContent(i) {
  const LContent = LoadContent().content;

  divRow = d.getElementsByClassName('FyrirlesturWidth')[0];
  const codeContent = d.createElement('div');
  codeContent.className = 'Content__codeContainer Content__padding';
  divRow.appendChild(codeContent);
  const paragraphs = LContent[i].data.split('\n');

  for (let j = 0; j < paragraphs.length; j += 1) {
    const code = d.createElement('p');
    const textNode = d.createTextNode(paragraphs[j]);
    if (textNode.wholeText === '') {
      code.className = 'Content__padding';
    } else {
      code.className = 'Content__code';
    }
    code.appendChild(textNode);
    codeContent.appendChild(code);
  }
}
export function Footer() {
  const LContent = LoadContent().content;

  divRow = d.getElementsByClassName('FyrirlesturWidth')[0];
  const klaraContent = d.createElement('div');
  klaraContent.className = 'Footer__Container Content__padding';
  divRow.appendChild(klaraContent);

  const text1 = d.createElement('p');
  const link1 = d.createElement('a');
  const node1 = d.createTextNode('Klára fyrirlestur');
  text1.appendChild(link1.appendChild(node1));
  text1.className = 'Footer__KlaraFyrirlestur';
  text1.id = 'ErHannKominn';

  const text2 = d.createElement('p');
  const link2 = d.createElement('a');
  const node2 = d.createTextNode('Tilbaka');
  text2.appendChild(link2.appendChild(node2));
  text2.className = 'Footer__Tilbaka';

  klaraContent.appendChild(text1);
  klaraContent.appendChild(text2);
}

export function GraentEdaEkki() {
  if (JSON.parse(localStorage.getItem('BunirFyrirlestrar')) !== null) {
    const Fyrirlestrar = JSON.parse(localStorage.getItem('BunirFyrirlestrar'));
    const { slug } = LoadContent();
    for (const i in Fyrirlestrar) {
      // for (let i = 0; i < JSON.parse(localStorage.getItem('BunirFyrirlestrar')).length; i+=1 ) {
      if (i === slug) {
        if (Fyrirlestrar[i] === 'Oklarad') {
          const text11 = d.getElementById('ErHannKominn');

          text11.className = 'Footer__KlaraFyrirlestur';
        } else if (Fyrirlestrar[i] === 'Klarad') {
          const text11 = d.getElementById('ErHannKominn');

          text11.className = 'Footer__KlaraFyrirlestur Footer__FyrirlesturBuinn';
        }
      }
    }
  }
}
