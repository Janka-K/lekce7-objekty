let krava = {
    jmeno: 'Kravicka',
    foto: 'obrazky/krava.jpg'
};

let ovecka = {
    jmeno: 'Ovecka',
    foto: 'obrazky/ovce.jpg'
};

// Vytvor obrazek zviratka krava s fotkou a popiskem.

// 1. Zacneme vytvorenim obalujiciho div element s tridou 'zvire'.

    //let zvire =

    let zvire = document.createElement('div');
    zvire.className = 'zvire'; // prirazeni tridy pro element


 

// 2. Nyni vytvor dva elementy pro obrazek a jmeno zvirete, ktere budou uvnitr naseho obalujiciho div elementu zvire.
    //2.1. Vytvor img element s tridou 'foto'. Jako src obrazku pridej hodnotu objektu krava.

    //let fotoZvirete =

    let fotoZvire = document.createElement('img');
    fotoZvire.className = 'foto';
    fotoZvire.src = krava.foto; 

    //2.2. Dale vytvor div element s tridou 'jmeno'. Jako text elementu zobraz hodnotu vlastnosti jmeno objektu krava.

    //let jmenoZvirete =

    let jmenoZvire = document.createElement('span');
    jmenoZvire.className = 'jmeno';
    jmenoZvire.innerHTML = krava.jmeno;

    //2.3. Zabal fotoZvire a jmenoZvirete do obalovaciho divu zvire, (psst zvire.appendChild)

    zvire.appendChild(fotoZvire);
    zvire.appendChild(jmenoZvire);

// 3. Nakonec pojdme nas kod zapojit do html stranky. Na html strance vyber existujici element s tridou farma.
// a vloz do nej obalujici element zvire (pssst appendChild)

  //let farma =

  let farma = document.querySelector(".farma");
  farma.appendChild(zvire);

// Bonus
// Co kdybychom meli program, kde tech zvirat je vic - objekt krava, objekt ovce, objekt prase...
// Musela bych pro kazdy objekt mit samostatnou promennou...jde to lépe?