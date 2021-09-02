//grab elements from the DOM
let body = document.querySelector("body");
const userName = document.getElementById("name");
const startButton = document.querySelector(".startBtn");
const helloDiv = document.querySelector(".hello__div");
const anomalyBtn = document.getElementById("hello__anomalybtn")
const liftOffBtn = document.getElementById("hello__liftoffbtn");
const paragraph = document.querySelector("p");

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
    constructor(backgroundcolor, textcolor, ptext) {
        this.backgroundcolor = backgroundcolor;
        this.textcolor = textcolor;
        this.ptext = ptext;
    }

    fadeIn() {     
            body.style.backgroundColor = `${this.backgroundcolor}`;
            body.style.transition = "all 3s ease-in-out";
    }

    changeP() {
        paragraph.textContent = `${this.ptext}`;
        paragraph.style.transition = "all 3s ease-in-out";
    }

}

liftOffBtn.addEventListener("click", function(e) {
    e.preventDefault();
    greet1.innerText = "";
    scene1 = new Scene("indigo", "navy", `You're right PAL, we have a job to do.  
    Amazing scientific discovery or not, I've get to get these people to their new home before we lose too much of the solar wind.`);
    setTimeout(function() {
        scene1.fadeIn();
    }, 3500);
    setTimeout(function() {
        scene1.changeP();
    })
})
