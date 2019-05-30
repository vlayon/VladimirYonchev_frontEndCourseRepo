var shoppingCart = [
	{
		name: "apple",
		type: "fruit",
		quantity: 5
	},
	{
		name: "banana",
		type: "fruit",
		quantity: 2
	},
	{
		name: "potato",
		type: "vegetable",
		quantity: 10
	},
	{
		name: "cheese",
		type: "diry",
		quantity: 1
	},
	{
		name: "yogurt",
		type: "diry",
		quantity: 3
	},
	{
		name: "steak",
		type: "meat",
		quantity: 1
	},
	{
		name: "ice cream",
		type: "sweet",
		quantity: 1
	},
	{
		name: "bounty",
		type: "sweet",
		quantity: 3
	}
];


// This function accepts a shopping cart list and returns the overall quantity of all the items in it
function quantity(shoppingCart) {
  var quantityValue=0;
 
  shoppingCart.forEach(function(cartItem) {
    quantityValue= quantityValue+cartItem.quantity;
  });
	return quantityValue;
}

// This function accepts a shopping cart list and returns the quantity of the fruit and vegetable items in it
function veganQuantity(shoppingCart) {
  var veganQuantity = 0;
  shoppingCart.forEach(function(cartItem) {
    if (cartItem.type==="vegetable"||cartItem.type==="fruit") {
      veganQuantity = veganQuantity+cartItem.quantity;
    }

  });

	return veganQuantity;
}

console.log('overall', quantity(shoppingCart)); // should return 26
console.log('vegan', veganQuantity(shoppingCart)); // should return 17

//Task 2
var result = shoppingCart.filter(cartItem =>((cartItem.type ==="fruit")||(cartItem.type ==="vegetable")));
console.log(result);
veganQuantity(result);


//Task 3

 var bikes = [
    {
      name: "Drag",
      price: 200
    },
    {
      name: "RAM",
      price: 500
    },
    {
      name: "Scott",
      price: 1200
    },
    {
      name: "Balkan",
      price: "800"
    }
  ];

function Bike(name,price) {
this.name= name;
this.price=price;

}

bike.protype.toHTML- function() {
var html ="<h3>"+bike.name+"<//h3>"+":"+"<h3>"+bike.price+"<//h3>";
return html;
}
 
var newList = bikes.map(item=>new Bike(item.name,item.price));
console.log(newList);




//Task 4
function Hero(name, knownAs) {
this.name = name;
this.nickname = knownAs || name;
this.kickAss = function (enemy) {
console.log("Ass has been kicked")
};
this.saveWorld = function () {
// actions to save the world
console.log("Once again " + this.nickname + " saved the world!");
};
}

function BadGuy(name, knownAs) {
this.name= name;
this.nickName= knownAs||name;


}

var batman = new Hero("Bruce Wane", "Batman");
var joker = new BadGuy("Joker");
batman.kickAss(joker);
