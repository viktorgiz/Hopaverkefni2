let HtmlButton;
let CssButton;
let JsButton;
let d = document;
// export function toggleHtml() {
//     HtmlButton.className = 'button__html';
// }
// export function toggleCss() {
//     CssButton.className = 'button__css';
// }
// export function toggleJS() {
//     JsButton.className = 'button__js';
// }

export default function toggle() {
    HtmlButton = d.getElementsByClassName('Html')[0];
    CssButton = d.getElementsByClassName('Css')[0];
    JsButton = d.getElementsByClassName('JavaScript')[0];

    HtmlButton.addEventListener('click',()=>{
        if (HtmlButton.className === 'filters__filter Html'){
            HtmlButton.className = 'filters__filter Html button__html';
        } else {
            HtmlButton.className = 'filters__filter Html';
        }
    });
    CssButton.addEventListener('click',()=>{
        // CssButton.className = 'filters__filter Css button__css';
        if (CssButton.className === 'filters__filter Css'){
            CssButton.className = 'filters__filter Css button__css';
        } else {
            CssButton.className = 'filters__filter Css';
        }
    });
    JsButton.addEventListener('click', ()=>{
        // JsButton.className = 'filters__filter JavaScript button__js';
        if (JsButton.className === 'filters__filter JavaScript'){
            JsButton.className = 'filters__filter JavaScript button__js';
        } else {
            JsButton.className = 'filters__filter JavaScript';
        }
    });
}
