//grab elements from the DOM
const userName = document.getElementById("name");
const startButton = document.querySelector(".startBtn");
const helloDiv = document.querySelector(".hello__div");
const anomalyBtn = document.getElementById("hello__anomalybtn")
const liftOffBtn = document.getElementById("hello__liftoffbtn");

//test area!

// create a way to make characters based on user input and choices. use ES6 syntax this time 
//start the journey:
let User  = class {
    constructor(name, backgroundcolor, textcolor) {
        this.name = name;
        this.backgroundcolor = this.backgroundcolor;
        this.textcolor = textcolor;
    }
    greetUser() {
      return `Hello, ${this.name}.  I'm PAL.  What would you like to do first?`;
    }    

    choice() {
        anomalyBtn.classList = "";
        liftOffBtn.classList = "";
        startButton.classList.add("hidden");
    }
}

let person1 = "";
let greet1 = document.createElement("p");


startButton.addEventListener("click", function(e) {
    e.preventDefault();
    person1 = new User(userName.value, "var(--white-)", "var(--black-)");
    console.log(person1.greetUser());
    console.log(person1.choice());
    greet1.innerText = person1.greetUser();
    helloDiv.append(greet1);
    person1.choice();
})

//IM OK TO GO