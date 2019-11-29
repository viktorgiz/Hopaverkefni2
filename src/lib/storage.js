let Fyrirlestur;
let FyrirlesturToggle;

export function SaveContent(jsonSkra){
    Fyrirlestur = jsonSkra;
}
export function LoadContent(jsonSkra){
    return Fyrirlestur;
}
export function FyrirlesturBuinToggle(){
    // Hér ætlaði ég að prófa að geyma Kláraða fyrirlestra
    // Þeir eyddust, 
    // Þannig að kóðinn er aðeins flóknari en hann þarf að vera
    // En það sem hann gerir núna er að láta 
    // Klára fyrirlestur neðst á síðunni vera grænt, 
    // Síðan er notað annað fall að neðan sem athugar hvort að 
    // fyrirlesturinn sé búin.
    let slug = Fyrirlestur['slug'];
    if (FyrirlesturToggle===undefined){
        FyrirlesturToggle = [slug];
    }
    else if (FyrirlesturToggle.includes(slug)) {
        for( let i = 0; i < FyrirlesturToggle.length; i+=1 ){ 
            if ( FyrirlesturToggle[i] === slug) {
              FyrirlesturToggle.splice(i, 1); 
              i-=1;
            }
         }
    } else{
        FyrirlesturToggle.push(slug);
    }
}
export function KlaradirFyrirlestrar() {
    if (FyrirlesturToggle[0] === Fyrirlestur['slug']) {
        if(localStorage.getItem('BunirFyrirlestrar')===null) {
            localStorage.setItem('BunirFyrirlestrar', JSON.stringify(FyrirlesturToggle[0]));
        } else if(JSON.parse(localStorage.getItem('BunirFyrirlestrar')).includes(Fyrirlestur['slug'])) {
            let BuinBaetaVid = JSON.stringify(gogn['lectures'][i])
            localStorage.setItem('BunirFyrirlestrar','jaslæ');
        }
    }
}