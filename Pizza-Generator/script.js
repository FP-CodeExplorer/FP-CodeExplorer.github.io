let ingredienti = {
    formaggi: [
      "mozzarella",
      "fontina",
      "scamorza",
      "bufala",
      "taleggio",
      "gorgonzola",
      "grana",
      "pecorino",
      "brie"
    ],
    verdure: [
      "peperoni",
      "melanzane",
      "cipolle",
      "pomodorini",
      "carciofi",
      "asparagi",
      "olive",
      "funghi",
      "capperi"
    ],
    proteine: [
      "pancetta",
      "prosciutto cotto",
      "prosciutto crudo",
      "speck",
      "breasaola",
      "lardo",
      "tonno",
      "calamari"
    ],
    aggiunte: [
      'nutella',
      'cozze',
      'marmellata'
    ],
    impasti: [
      'normale',
      'integrale',
      'senza glutine',
      'ai cereali',
      'al carbone'
    ]
  }
  

  function selezionaIngrendiente(arrayIngredienti) {
    let ingredienteScelto = arrayIngredienti[Math.floor(Math.random() * arrayIngredienti.length)];
    return ingredienteScelto;
  }
  
  function generaIngredienti() {
    let formaggioRandom = selezionaIngrendiente(ingredienti.formaggi);
    let verduraRandom = selezionaIngrendiente(ingredienti.verdure);
    let proteinaRandom = selezionaIngrendiente(ingredienti.proteine);
    let aggiunta = document.getElementById('ingredienti');
    aggiunta.innerHTML = `${formaggioRandom}, ${verduraRandom} e ${proteinaRandom}`;
  }
  
  function generaAggiunta() {
    let aggiuntaRandom = selezionaIngrendiente(ingredienti.aggiunte);
    let aggiunta = document.getElementById('aggiunta');
    aggiunta.innerHTML = aggiuntaRandom;
  }
  
  function generaImpasto(){
    let impastoRandom = selezionaIngrendiente(ingredienti.impasti);
    let impasto = document.getElementById('impasto');
    impasto.innerHTML = impastoRandom;
  }
  
  function generaTutto() {
    generaIngredienti();
    generaAggiunta();
    generaImpasto();
  }



