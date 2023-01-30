// Business Logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = [];

}

Pizza.prototype.sizeCostCalculate = function() {
  let pizzaSizePrice = 0
  if (this.size === "small") {
    pizzaSizePrice = 10;
  }
  else if (this.size === "medium") {
    pizzaSizePrice = 15;
  }
  else if (this.size === "large") {
    pizzaSizePrice = 20;
  }
  this.sizeCost = pizzaSizePrice;
}

Pizza.prototype.toppingCostCalculate = function() {
  let totalToppingPrice = 0
  let toppingPrice = 1
  let smallToppingPrice = 1
  let mediumToppingPrice = 2
  let largeToppingPrice = 3
  let numberOfToppings = this.toppings.length;
  
  if (this.size === "small") {
    totalToppingPrice = (numberOfToppings * toppingPrice) * smallToppingPrice;
  }
  else if (this.size === "medium") {
    totalToppingPrice = (numberOfToppings * toppingPrice) * mediumToppingPrice;
  }
  else if (this.size === "large") {
    totalToppingPrice = (numberOfToppings * toppingPrice) * largeToppingPrice;
  }
  this.toppingCost = totalToppingPrice;
}

Pizza.prototype.totalCostCalculate = function() {
  this.totalCost = this.toppingCost + this.sizeCost;
}


// User Interface Logic

let pizza = new Pizza();

function calculateSize() {
  if (document.getElementById("small").checked === true) {
    pizza.size = "small"
  }
  else if (document.getElementById("medium").checked === true) {
    pizza.size = "medium"
  }
  else if (document.getElementById("large").checked === true) {
    pizza.size = "large"
  }
  else (alert("Please choose a size"))
  console.log(pizza.size);
  console.log(pizza.size);
}
function calculateToppings() {
  if (document.getElementById("cheese").checked === true){
    if (!pizza.toppings.includes("cheese")) {
      pizza.toppings.push("cheese");
      } 
    }
  if (document.getElementById("pepperoni").checked === true) {
    if (!pizza.toppings.includes("pepperoni")) {
      pizza.toppings.push("pepperoni");
      }
    }
  if (document.getElementById("sausage").checked === true) {
    if (!pizza.toppings.includes("sausage")) {
      pizza.toppings.push("sausage");
      }
    }
  if (document.getElementById("mushrooms").checked === true) {
    if (!pizza.toppings.includes("mushrooms")) {
    pizza.toppings.push("mushrooms")
    }
  }
};

function displayCost() {
  pizza.sizeCostCalculate();
  pizza.toppingCostCalculate();
  pizza.totalCostCalculate();
  document.getElementById("cost").innerText = pizza.totalCost;
}



window.addEventListener("load", function (){
  document.querySelector(".btn-submit").addEventListener("click", function() {
    calculateSize();
    calculateToppings();
    displayCost();
  });
});
