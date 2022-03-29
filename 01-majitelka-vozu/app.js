// Vytvoř objekt auto, který bude mít vlastnosti: znacka, barva, rokVyroby,..

let auto = {
    znacka: 'Ford',
    barva: 'modra',
    rok_vyroby: 2015,
    spz: '1b23456'
};
// Přidej novou vlastnost (majitel a prirad ji svoje jmeno jako hodnotu)

auto.majitel = {};
auto.majitel.jmeno = 'Jana';
auto.majitel.prijmeni = 'Novakova';


// Přepiš značku na Škoda

auto.znacka = 'Skoda';

// Vytvor tri promenne majitelka, znacka a spz a vloz do techto elementu text z objektu auto.

let znacka = auto.znacka;
let spz = auto.spz;
let majitelka = auto.majitel.jmeno + ' ' + auto.majitel.prijmeni;