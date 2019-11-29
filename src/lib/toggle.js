let HtmlButton;
let CssButton;
let JsButton;
const d = document;
// export function toggleHtml() {
//     HtmlButton.className = 'button__html';
// }
// export function toggleCss() {
//     CssButton.className = 'button__css';
// }
// export function toggleJS() {
//     JsButton.className = 'button__js';
// }

export default function toggle(e) {
  e.preventDefault;
  HtmlButton = d.getElementsByClassName('Html')[0];
  CssButton = d.getElementsByClassName('Css')[0];
  JsButton = d.getElementsByClassName('JavaScript')[0];

  if (e.srcElement.className === HtmlButton.className) {
    if (HtmlButton.className === 'filters__filter Html') {
      HtmlButton.className = 'filters__filter Html button__html';
    } else {
      HtmlButton.className = 'filters__filter Html';
    }
  } else if (e.srcElement.className === CssButton.className) {
    // CssButton.className = 'filters__filter Css button__css';
    if (CssButton.className === 'filters__filter Css') {
      CssButton.className = 'filters__filter Css button__css';
    } else {
      CssButton.className = 'filters__filter Css';
    }
  } else if (e.srcElement.className == JsButton.className) {
    // JsButton.className = 'filters__filter JavaScript button__js';
    if (JsButton.className === 'filters__filter JavaScript') {
      JsButton.className = 'filters__filter JavaScript button__js';
    } else {
      JsButton.className = 'filters__filter JavaScript';
    }
  }
}
