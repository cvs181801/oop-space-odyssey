//grab elements from the DOM
let body = document.querySelector("body");
const userName = document.getElementById("name");
const startButton = document.querySelector(".startBtn");
const helloDiv = document.querySelector(".hello__div");
const anomalyBtn = document.getElementById("hello__anomalybtn")
const liftOffBtn = document.getElementById("hello__liftoffbtn");

//test area!
console.log(document.body);

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
    greet1.innerText = person1.greetUser();
    helloDiv.append(greet1);
    person1.choice();
})

//create a way to advance to scene 2, based on user's choice of button

let Scene = class {
    constructor(backgroundcolor, textcolor) {
        this.backgroundcolor = backgroundcolor;
        this.textcolor = textcolor;
    }

    fadeIn() {     
            body.style.backgroundColor = `${this.backgroundcolor}`;
    }

}

liftOffBtn.addEventListener("click", function(e) {
    e.preventDefault();
    scene1 = new Scene("indigo", "navy");
    setTimeout(function() {
        scene1.fadeIn();
    }, 3500);
})
