 var bikes = [
    {
      name: "Drag",
      price: 200, 
      color: "red", 
      weight: 15
    },
    {
      name: "RAM",
      price: 500,
      color: "blue", 
      weight: 12
    },
    {
      name: "Scott",
      price: 1200, 
      color: "white", 
      weight: 13
    },
    {
      name: "Balkan",
      price: "800", 
      color: "blue", 
      weight: 17
    }
  ];

function Bike(name,price, color, weight) {
this.name= name;
this.price=price;
this.color= color;
this.weight= weight;

}


 //this method prints info  by given array element into the HTML page
function printBike(bike, i) {
  var bikeContainer = document.querySelector(".bikeContainer:last-child");
  var bikeElement = bikeContainer.querySelector(".bikeContainer h2");
  bikeElement.innerText ="Element "+((i+1).toString())+":";

  var bikeBrandElement = bikeContainer.querySelector(".brand");
  bikeBrandElement.innerHTML = "<h3>"+"brand: "+bike.name+"</h3>";

  var bikePriceElement = bikeContainer.querySelector(".price");
  bikePriceElement.innerHTML = "<h3>"+"price: "+bike.price+"</h3>";

  var bikeColorElement = bikeContainer.querySelector(".color");
  bikeColorElement.innerHTML = "<h3>"+"color: "+bike.color+"</h3>";

  var bikeWeightElement = bikeContainer.querySelector(".weight");
  bikeWeightElement.innerHTML = "<h3>"+"weight: "+bike.weight+"</h3>";
}

//this method clones the last bike node
function cloneBikeNode() {
  var container = document.querySelector("#mainContainer");
  var lastBike = container.querySelector(".bikeContainer:last-child");
  var newBike = lastBike.cloneNode(true);
  container.appendChild(newBike);
}

//iterate over array of elements and print them into HTML page
function printArrayOfElement(array) {

  for(i=0; i<array.length; i++) {
    printBike(array[i], i);
    if(i===(array.length-1)) {
      break;
    }
    cloneBikeNode();

  }
}

printArrayOfElement(bikes);







