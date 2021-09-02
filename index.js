//grab elements from the DOM
let body = document.querySelector("body");
const userName = document.getElementById("name");
const startButton = document.querySelector(".startBtn");
const helloDiv = document.querySelector(".hello__div");
const choiceABtn = document.getElementById("hello__btn--choiceA")
const choiceBBtn = document.getElementById("hello__btn--choiceB");
const paragraph = document.querySelector(".hero__p");
const header1 = document.querySelector("h1");
const inputElement = document.querySelector("input");
const photoCredit = document.querySelector(".photocredit");

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
        choiceABtn.classList = "";
        choiceBBtn.classList = "";
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
    constructor(backgroundcolor, textcolor, ptext, photocredittext, backgroundimage, missiontext) {
        this.backgroundcolor = backgroundcolor;
        this.textcolor = textcolor;
        this.ptext = ptext;
        this.photocredittext = photocredittext;
        this.backgroundimage = backgroundimage;
        this.missiontext = missiontext;
    }

    fadeIn() {     
            body.style.backgroundColor = `${this.backgroundcolor}`;
            body.style.transition = "all 3s ease-in-out";
            header1.style.color = `${this.backgroundcolor}`;
            header1.style.transition = "all 3s ease-in-out";
    }

    changeP() {
        paragraph.style.color = `${this.textcolor}`;
        paragraph.style.transition = "all 3s ease-in-out";
        paragraph.textContent = `${this.ptext}`;
    }

    addBackgroundImage() {
        body.style.backgroundImage = `url(${this.backgroundimage})`;
        header1.textContent = `${this.missiontext}`;
        header1.style.color = "white";
        body.style.backgroundPosition = "center";
        body.style.transition = "all 3s ease-in-out";
        header1.style.transition = "all 3s ease-in-out";
        photoCredit.style.marginTop = "40em";
        photoCredit.style.fontSize = ".7rem";
        photoCredit.style.transition = "all 3s ease-in-out";
        photoCredit.style.color = `lightgrey`;
        photoCredit.textContent = `${this.photocredittext}`; 
    }
}

//create a way to render the scene for first choice A, initiate liftoff!

choiceABtn.addEventListener("click", function(e) {
    e.preventDefault();
    greet1.innerText = "";
    inputElement.style.display = "none";
    choiceABtn.classList.add("hidden");
    choiceBBtn.classList.add("hidden");
    scene1 = new Scene(`indigo`, `aqua`, `You're right PAL, we have a job to do.  
    Amazing scientific discovery or not, I've get to get these people to their new home before we lose too much of the solar wind.`, `Photo by mohammad alizade on Unsplash`,
    `/Users/casvalkyriespicer/Documents/GitHub/oop-space-odyssey/pics/marsinspace.jpeg`, `MARS MISSION: COMPLETE`);
    setTimeout(function() {
        scene1.fadeIn();
    }, 2500);
    setTimeout(function() {
        scene1.changeP();
    }, 2500)

    paragraph.addEventListener("mouseover", function(e) {
        e.preventDefault();
             scene1.addBackgroundImage()
             paragraph.textContent = `HAL: Excellent work, ${person1.name}.  Should we debreif and take shore leave?`;
             paragraph.style.transition = "all 3s ease-in-out";
             choiceABtn.textContent = `No, let's take a rover across the surface.`
             choiceBBtn.textContent = `Yes, but first you and I need to talk.`
             body.removeChild(helloDiv);
             choiceABtn.classList.remove("hidden");
             choiceBBtn.classList.remove("hidden");
             choiceABtn.style.margin = "0 .5em 0 .5em";
             choiceBBtn.style.margin = "0 .5em 0 .5em";
             input.style.margin = "0";
             paragraph.style.margin = "0";
             paragraph.style.padding = "0";
             
    })
})

//create a way to render the scene for first choice B, investigate the anomaly!

choiceBBtn.addEventListener("click", function(e) {
    e.preventDefault();
    greet1.innerText = "";
    inputElement.style.display = "none";
    choiceABtn.classList.add("hidden");
    choiceBBtn.classList.add("hidden");
        scene1Alt = new Scene(`red`, `lightgrey`, `This opportunity is once in a lifetime.  I don't care if I get reprimanded, PAL. I have to take a quick detour to investigate!`,
        `photo by Aldebaran S on Unsplash`, `/Users/casvalkyriespicer/Documents/GitHub/oop-space-odyssey/pics/aldebaran-nebula.jpeg`, `SECTION X216: 90 Thousand Light Years from the X216 Anomaly`);
    setTimeout(function() {
        scene1.fadeIn();
    }, 2500);
    setTimeout(function() {
        scene1.changeP();
    }, 2500)

    paragraph.addEventListener("mouseover", function(e) {
        e.preventDefault();
             scene1.addBackgroundImage()
             paragraph.textContent = `HAL: Welcome to Milky Way Section X216, Anomaly of unknown origin.  By my calculations, this is an active superheated gaseous nebula spinning 36 million
             times per second and generating a find cosmic dust containing every element in the periodic table, including 11 not yet identified.`;
             paragraph.style.transition = "all 3s ease-in-out";
             choiceABtn.textContent = `Take me in closer HAL.`
             choiceBBtn.textContent = `Please perform a full spectral analysis, HAL.`
             body.removeChild(helloDiv);
             choiceABtn.classList.remove("hidden");
             choiceBBtn.classList.remove("hidden");
             choiceABtn.style.margin = "0 .5em 0 .5em";
             choiceBBtn.style.margin = "0 .5em 0 .5em";
             input.style.margin = "0";
             paragraph.style.margin = "0";
             paragraph.style.padding = "0";
             
    })

})
