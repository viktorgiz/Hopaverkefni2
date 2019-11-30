let Fyrirlestur;

export function SaveContent(jsonSkra) {
  Fyrirlestur = jsonSkra;
}
export function LoadContent() {
  return Fyrirlestur;
}
export function FyrirlesturBuinToggle() {
  if (localStorage.getItem('BunirFyrirlestrar') === null) {
    const json = {
      'html-sagan': 'Oklarad',
      'html-element': 'Oklarad',
      'html-a11y': 'Oklarad',
      'css-syntax': 'Oklarad',
      'css-box': 'Oklarad',
      'css-flexbox': 'Oklarad',
      'css-responsive': 'Oklarad',
      'js-basic': 'Oklarad',
      'js-programs': 'Oklarad',
      'js-functions': 'Oklarad',
      'js-array': 'Oklarad',
      'js-dom': 'Oklarad',
      'js-example': 'Oklarad',
    };
    localStorage.setItem('BunirFyrirlestrar', JSON.stringify(json));
  }
  const Fyrirlestrar = JSON.parse(localStorage.getItem('BunirFyrirlestrar'));

  for (const i in Fyrirlestrar) {
    if (Fyrirlestur.slug === i) {
      if (Fyrirlestrar[i] === 'Oklarad') {
        Fyrirlestrar[i] = 'Klarad';
        localStorage.removeItem('BunirFyrirlestrar');
        localStorage.setItem('BunirFyrirlestrar', JSON.stringify(Fyrirlestrar));
      } else if (Fyrirlestrar[i] === 'Klarad') {
        Fyrirlestrar[i] = 'Oklarad';
        localStorage.removeItem('BunirFyrirlestrar');
        localStorage.setItem('BunirFyrirlestrar', JSON.stringify(Fyrirlestrar));
      }
    }
  }
}
