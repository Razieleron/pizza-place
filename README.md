<strong>Application Name: Pizza Ordering Webpage!</strong>

<strong>By Jannon Sielaff</strong>

-Programming Quiz-

<strong>Technologies Used:</strong>

* HTML
* JavaScript
* Markdown Language
* CSS Style Sheets
* Web Browser
* Text Editor/IDE - Visual Studio Code

<strong>Description:</strong> (Please note: The TDD documentation is appended to the *END* of this README)

This is an exercise in constructors, prototypes, and their application.  The functionality is as so - the website prompts the user with a set of radio buttons for size, and a number of checkboxes for toppings.  Upon selecting the size and toppings you'd like, the JavaScript automatically takes those values, injects them into a pizza-type object, and then runs logic on those values to return the price.  The prices are conditional by size and are as follows - Small Pizzas are 10 dollars, Medium Pizzas are 15 dollars, and Large Pizzas are 20 dollars - however those prices are just for the pizza by size.  Once you add a topping, it is either 1 dollar (for small) 1.50 (for medium), or 2.00 (for large).  Once you have selected your size and your toppings, the logic runs and returns the price of the pizza you selected at the bottom of the screen.   

<strong>Setup/Installation Requirements:</strong>

Web Browser (to view rendered code)
Text Editor (to view raw code)
Image Editing/Viewing software (to look at pretty pictures)

In order to view this webpage, you have download the zip file (located at the bottom of the menu when you click the [<> Code ]), or clone the repository to a local drive.  Once you have the directory(ies) installed on your machine (or a clone of it), you can open the webpage using your default browser by double-clicking on the file marked 'index.html'

<strong>Link to Project Repository and link to Personal Repository:</strong>

This *particular* repository: https://github.com/Razieleron/pizza-place<br>
My whole Repository: https://github.com/Razieleron/razieleron.github.io<br>

<strong>Known Bugs:</strong>

None Currently

<strong>TDD Documentation:</strong>



<strong>Describe function Pizza(size, toppings)</strong>

<strong>Test:</strong> :"It should return an object with a particular size and an array of toppings."<br>
Code:<br>
function Pizza("small", ["pepperoni", "mushrooms"]);<br>

Expected Output: "Pizza {size: 'small', toppings: Array(2)}"



<strong>Describe function Pizza.prototype.sizeCostCalculate = function()</strong>

<strong>Test:</strong> "It should inject a value into the object for the price dependent on the size of the pizza."<br>
Code:<br>
let pizzaSizePrice = 0<br>
  if (this.size === "small") {<br>
    pizzaSizePrice = 10;<br>
  }<br>
  this.sizeCost = pizzaSizePrice;
Expected Output: "Pizza {size: 'small', sizeCost: 10};"

<strong>Test:</strong> "It should be able to inject one of three values depending on what the user selects"<br>
Code:<br>
  let pizzaSizePrice = 0<br>
  if (this.size === "small") {<br>
    pizzaSizePrice = 10;<br>
  }<br>
  else if (this.size === "medium") {<br>
    pizzaSizePrice = 15;<br>
  }<br>
  else if (this.size === "large") {<br>
    pizzaSizePrice = 20;<br>
  }<br>
  this.sizeCost = pizzaSizePrice;<br>
}<br>
Expected Output: "Pizza {size: 'small', sizeCost: 10} -or- Pizza {size: 'medium', sizeCost: 15}" -or- Pizza {size: 'large', sizeCost: 20}" 


<strong>Describe function Pizza.prototype.toppingCostCalculate = function()</strong>

<strong>Test:</strong> "It should return 1 when only one topping is selected"<br>
Code:<br>
let numberOfToppings = this.toppings.length<br>

Expected Output: "Pizza {size: 'small', toppings: Array(1), sizeCost: 10, toppingCost: 1}"


<strong>Test:</strong> "It should return 4 when all 4 toppings have been selected."<br>
Code:<br>
let numberOfToppings = this.toppings.length<br>
Expected Output: "Pizza {size: 'small', toppings: Array(4), sizeCost: 10, toppingCost: 4}


<strong>Test:</strong> "It should return an adjusted topping value based on the size of the pizza."<br>
Code:<br>
let mediumToppingPrice = 2
  if (this.size === "medium") {<br>
    totalToppingPrice = (numberOfToppings * toppingPrice) * mediumToppingPrice;<br>
  }<br>
Expected Output: "Pizza {size: 'medium', toppings: Array(4), sizeCost: 15, toppingCost: 8}"



<strong>Describe function Pizza.prototype.totalCostCalculate = function()</strong>

<strong>Test:</strong> "It should return the sum of the sizeCost and the adjusted toppingCost values" <br>
Code:<br>
Pizza.prototype.totalCostCalculate = function() {<br>
  this.totalCost = this.toppingCost + this.sizeCost;<br>
}<br>
Expected Output: "Pizza {size: 'large', toppings: Array(3), sizeCost: 20, toppingCost: 9, totalCost: 29}"


License:

Please reach out to me if you have any issues, questions or concerns at jannon.sielaff@gmail.com.  Please feel free to contact me or make a contribution/improvement to my code!

Copyright (c) January 13th, 2023 Jannon Sielaff