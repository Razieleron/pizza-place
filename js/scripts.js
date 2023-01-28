// Business Logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = [];
}

Pizza.prototype.sizeCost = function() {
  if (size = "Small") {
    pizzaSizePrice = 10;
  }
  if (size = "Medium") {
    pizzaSizePrice = 15;
  }
  if (size = "Large") {
    pizzaSizePrice = 20;
  }
}

Pizza.prototype.toppingCost = function() {
  let totalToppingPrice = 0
  let toppingPrice = 1
  let smallToppingPrice = 1
  let mediumToppingPrice = 2
  let largeToppingPrice = 3
  let numberOfToppings = this.toppings.length;
  if (this.size = "Small") {
    totalToppingPrice = (numberOfToppings * toppingPrice) * smallToppingPrice;
  }
  if (this.size = "Medium") {
    totalToppingPrice = (numberOfToppings * toppingPrice) * mediumToppingPrice;
  }
  if (this.size = "Large") {
    totalToppingPrice = (numberOfTopping * toppingPrice) * mediumToppingPrice;
  }
}

// User Interface Logic

let pizza = new Pizza();

function calculateSize() {
  size = document.getElementById("size").value;
  pizza.size = size
}
function calculateToppings() {
  if (document.getElementById("cheese").checked=true) {
    pizza.toppings.push("cheese");
  }
}


window.addEventListener("load", function (){
  document.querySelector(".btn-submit").addEventListener("click", function() {
    calculateToppings();

  });
});
