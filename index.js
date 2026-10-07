//node making server below
/*const http = require('http')
const server = http.createServer((request, response) => {
    response.write('Hello World')
    response.end()
})
server.listen(3000)*/
//object

/*let person = {
    firname: 'Mosh',
    age: 30
};
//dot notation
person.firname = 'John';

//bracket notation
let selection = 'firname';
person[selection] = 'Mary';

let selectedColours = ['red', 'blue'];
selectedColours[1] = 'pink';

console.log(selectedColours[1]);

function greet(name, lastName) {
    console.log('Hello World ' + name + ' ' + lastName);
}

greet('John', 'poopyhead');
greet('Munchkin', 'meowskers');

//calculating a value
function square(number){
    return number * number;
}

let number = square(5);
console.log(number);
console.log(square(3));

/*let firname = 'Mosh'; //String literal
let age = 30; //number literal*/

/*let isApproved = true; //boolean literal
let firstName = undefined;
let lastName = null; //use null in situations where we want to explicitly clear the value of a variable
let selectedColour = null; //reassign colour when user selects the colour

const interestRate = 0.3;
//const should be default choice unless we want to reassign variables

console.log(isApproved);
console.log(interestRate);
console.log(person.firname);
console.log('Hello World');*/

//start of document
/* Set the width of the side navigation to 250px */

//collapsible
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

document.getElementById("addTransaction").addEventListener("click", addTransactions);

//the code below allows us to filter between income and expense categories for autofill purposes
$(document).ready(function () {

        $("#income").click(function () {
            $("#income-cat").show();
            $("#expense-cat").hide();
        });
        $("#expense").click(function () {
            $("#expense-cat").show();
            $("#income-cat").hide();
        });
   });


function loadTransactions(){
    const transactions = JSON.parse(localStorage.getItem("transactions")) || [];
}

function addTransactions(){
    console.log("Hello world!");
    const amount = document.getElementById("amount").value;
    console.log(amount);
}

function deleteTransaction(){

}

function calculateBalance(){

}

function renderTransactions(){

}