function card(name, image) {
    this.name = name;
       this.image = image;
}

var deck = [
    new card('Beer', 'beer'),
    new card('Bench', 'bench'),
    new card('Broom', 'broom'),
    new card('Egg', 'egg'),
    new card('Envelope', 'envelope'),
    new card('Radio', 'radio'),
    new card('Shoe', 'shoe'),
    new card('Soap', 'soap'),
    new card('Soup', 'soup'),
    new card('Toast', 'toast'),    
    new card('Door', 'door'),
    new card('Window', 'window'),
    new card('Roof', 'roof'),
    new card('Lake', 'lake'),
    new card('Violin', 'violin'),
    new card('Gutter', 'gutter'),
    new card('Computer', 'computer'),
    new card('Umbrella', 'umbrella'),
    new card('Hook', 'hook'),    
    new card('Meat', 'meat'),
    new card('Cup', 'cup'),
    new card('Dog', 'dog'),
    new card('Candy', 'candy'),
    new card('Paint', 'paint'),
    new card('Man', 'man'),
    new card('Water', 'water'),
    new card('Bottle', 'bottle'),
    new card('Neon', 'neon'),    
    new card('Light', 'light'),
    new card('Bag', 'bag'),
    new card('Chain', 'chain'),

    new card('Insect', 'insect'),
    new card('Rose', 'rose'),
    new card('Butter', 'butter'),
    new card('Nut', 'nut'),

/*
    
    new card('Landlord', 'landlord'),
    new card('Cashier', 'cashier'),    
    new card('Glue', 'glue'),
    new card('Shaft', 'shaft'),
    new card('Prison', 'prison'),
    new card('Torpedo', 'torpedo'),
    new card('Ladle', 'ladle'),
    new card('Fly', 'fly'),
    new card('Fossil', 'fossil'),

    
    new card('Twig', 'toast'),
    new card('Bird', 'toast'),
    new card('Sword', 'toast'),
    new card('Motor', 'toast'),
    new card('Monster', 'toast'),
    
    new card('Field', 'toast'),
    new card('Gun', 'toast'),
    new card('Acid', 'toast'),
    new card('Stamp', 'toast'),
    new card('Beetle', 'toast'),
    new card('Sun', 'toast'),
    new card('Summer', 'toast'),
    new card('Ice', 'toast'),
    new card('Dust', 'toast'),
    new card('Bible', 'toast'),
    new card('Drum', 'toast'),
    new card('Fog', 'toast'),
    new card('Football', 'toast'),
    new card('Bridge', 'toast'),
    new card('Rope', 'toast'),
    new card('Pulley', 'toast'),
    new card('Toe', 'toast'),
    new card('Woman', 'toast'),
    new card('Plow', 'toast'),
    new card('Mattress', 'toast'),
    new card('Sunset', 'toast'),
    new card('Gate', 'toast'),
    new card('Clock', 'toast'),
    new card('Rash', 'toast'),
    new card('Car', 'toast'),
    new card('Road', 'toast'),
    new card('Zoo', 'toast'),
    new card('Museum', 'toast'),
    new card('Painting', 'toast'),
    new card('Sand', 'toast'),

  
    */

]

function getRandom(number) {
    var randomNumber = Math.floor(Math.random() * number);
    return randomNumber;
}

document.getElementById("display") = function(){
    var index = getRandom(34);
    var currentCard = deck[index];
    
    document.getElementById("display").innerHTML = '<h3>' + currentCard.name + '</h3><img src="assets/' + currentCard.image + '.jpg" height=500 width=350>';
};

document.getElementById("draw").onclick = function(){
    var index = getRandom(34);
    var currentCard = deck[index];

    document.getElementById("display").innerHTML = '<h3>' + currentCard.name + '</h3><img src="assets/' + currentCard.image + '.jpg" height=500 width=350>';
};
