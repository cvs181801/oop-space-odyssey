//grab elements from the DOM
const userName = document.getElementById("name");
const startButton = document.querySelector(".startBtn");
const helloDiv = document.querySelector(".hello__div");
//test area!

// create a way to make characters based on user input and choices. use ES6 syntax this time 

class User {
    constructor(name) {
        this.name = name;
    }
    greetUser() {
      return `Hello, ${this.name}.  I'm PAL.`;
    }
       
}

let person1 = "";
let greet1 = document.createElement("p");

startButton.addEventListener("click", function(e) {
    e.preventDefault();
    person1 = new User(userName.value);
    console.log(person1.greetUser);
    //greet1.innerText = person1.greetUser();
    //helloDiv.append(greet1);
})