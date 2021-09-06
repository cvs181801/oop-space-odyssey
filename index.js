//grab elements from the DOM
let body = document.querySelector("body");
const userName = document.getElementById("name");
const startButton = document.querySelector(".startBtn");
const helloDiv = document.querySelector(".hello__div");
const choiceABtn = document.getElementById("hello__btn--choiceA");
const choiceBBtn = document.getElementById("hello__btn--choiceB");
const choiceCBtn = document.getElementById("hello__btn--choiceC");
const choiceDBtn = document.getElementById("hello__btn--choiceD");
const choiceEBtn = document.getElementById("hello__btn--choiceE");
const choiceFBtn = document.getElementById("hello__btn--choiceF");
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
        this.backgroundcolor = backgroundcolor;
        this.textcolor = textcolor;
    }
    greetUser() {
      return `Hello, ${this.name}.  I'm PAL. We have been given the primary task of bringing these people to their new homes. What would you like to do first?`;
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
        scene1 = new Scene(`indigo`, `aqua`, `PAL: Excellent work, ${person1.name}.  We've arrived at Mars
        without incident.  The passengers have alread begun to offload the necessary resources to build 
        a flourishing settlement.  Should we debrief and take shore leave?`, `Photo by mohammad alizade on Unsplash`,
    `/Users/casvalkyriespicer/Documents/GitHub/oop-space-odyssey/pics/marsinspace.jpeg`, `MARS MISSION: COMPLETE`);
    setTimeout(function() {
        scene1.fadeIn();
    }, 2500);
     setTimeout(function(){
        scene1.changeP()}, 3500);
    
        
   setTimeout(function() {
             scene1.addBackgroundImage()
             paragraph.textContent = `You're right PAL, we have a job to do.  
             Amazing scientific discovery or not, I've get to get these people to their new home before we lose too much of the solar wind.`;
             paragraph.style.transition = "all 3s ease-in-out";
             choiceCBtn.textContent = `No, let's take a rover across the surface.`
             choiceDBtn.textContent = `Yes, but first you and I need to talk.`
             body.removeChild(helloDiv);
             choiceCBtn.classList.remove("hidden");
             choiceDBtn.classList.remove("hidden");
             choiceCBtn.style.margin = "0 .5em 0 .5em";
             choiceDBtn.style.margin = "0 .5em 0 .5em";
             input.style.margin = "0";
             paragraph.style.margin = "0";
<<<<<<< HEAD
             paragraph.style.padding = "0";    
    })
=======
             paragraph.style.padding = "0";
             
    });
>>>>>>> 655fc8f6a4ac76091d0d47f4fd05f65bdde41d46
})

//create a way to render the scene for first choice B, investigate the anomaly!

choiceBBtn.addEventListener("click", function(e) {
    e.preventDefault();
    greet1.innerText = "";
    paragraph.innerText = "";
    inputElement.style.display = "none";
    choiceABtn.classList.add("hidden");
    choiceBBtn.classList.add("hidden"); 
    //alt text colors: #E0FEF2 , #CBFEEA . alt background colors: #3E0000
        scene1Alt = new Scene(`#400020`, `#67FCC2`, `PAL: Welcome to Milky Way Section X216, Anomaly of unknown origin.  By my calculations, this is an active superheated gaseous nebula spinning 36 million
        times per second and generating a fine cosmic dust containing every element in the periodic table, including 11 not yet identified.`,
        `photo by Aldebaran S on Unsplash`, `/Users/casvalkyriespicer/Documents/GitHub/oop-space-odyssey/pics/aldebaran-nebula.jpeg`, `SECTION X216: 90 Thousand Light Years from the X216 Anomaly`);
    setTimeout(function() {
        scene1Alt.fadeIn();
    }, 2500);
    setTimeout(function() {
        scene1Alt.changeP()}, 5500);

    setTimeout(function(){
             scene1Alt.addBackgroundImage()
             paragraph.textContent = `This opportunity is once in a lifetime.  I don't even care if I get reprimanded, PAL. I have to take a quick detour to investigate!`;
             paragraph.style.transition = "all 3s ease-in-out";
             choiceEBtn.textContent = `Take me in closer PAL.`
             choiceFBtn.textContent = `PAL, please perform a full spectrum analysis.`
             body.removeChild(helloDiv);
             choiceEBtn.classList.remove("hidden");
             choiceFBtn.classList.remove("hidden");
             choiceEBtn.style.margin = "0 .5em 0 .5em";
             choiceFBtn.style.margin = "0 .5em 0 .5em";
             input.style.margin = "0";
             paragraph.style.margin = "0";
             paragraph.style.padding = "0";
             
    }, 2500);

});
