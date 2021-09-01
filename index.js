//grab elements from the DOM
const userName = document.getElementById("name");
const startButton = document.querySelector(".startBtn");
const helloDiv = document.querySelector(".hello__div");
//test area!

// create a way to make characters based on user input and choices. use ES6 syntax this time 

let User  = class {
    constructor(name) {
        this.name = name;
    }
    greetUser() {
      return `Hello, ${this.name}.  I'm PAL.  What would you like to do first?`;
    }    

    choice() {
        return `Begin lift off or delay by 30 minutes`;
    }
}

let person1 = "";
let greet1 = document.createElement("p");
let choice1 = document.createElement("p");

startButton.addEventListener("click", function(e) {
    e.preventDefault();
    person1 = new User(userName.value);
    console.log(person1.greetUser());
    console.log(person1.choice());
    greet1.innerText = person1.greetUser();
    helloDiv.append(greet1);
    choice1.innerText = person1.choice();
    helloDiv.append(choice1);
})