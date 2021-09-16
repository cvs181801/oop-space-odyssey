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
const choiceGBtn = document.getElementById("hello__btn--choiceG");
const choiceHBtn = document.getElementById("hello__btn--choiceH");
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
    constructor(backgroundcolor, textcolor, ptext, photocredittext, backgroundimage, missiontext, header1color) {
        this.backgroundcolor = backgroundcolor;
        this.textcolor = textcolor;
        this.ptext = ptext;
        this.photocredittext = photocredittext;
        this.backgroundimage = backgroundimage;
        this.missiontext = missiontext;
        this.header1color = header1color;
    }

    fadeIn() {     
        body.style.backgroundColor = `${this.backgroundcolor}`;
        body.style.transition = "all 3s ease-in-out";
        header1.style.color = `${this.backgroundcolor}`;
        header1.style.transition = "all 3s ease-in-out";
        paragraph.style.color = `${this.textcolor}`;
        paragraph.style.transition = "all 3s ease-in-out";
    }

    fadeOut() {
        paragraph.style.color = `${this.backgroundcolor}`;
        paragraph.style.transition = "all 3s ease-in-out";
    }

    changeP() {
        paragraph.style.color = `${this.textcolor}`;
        paragraph.style.transition = "all 3s ease-in-out";
        paragraph.textContent = `${this.ptext}`;
    }

    addBackgroundImage() {
        body.style.backgroundImage = `url(${this.backgroundimage})`;
        header1.textContent = `${this.missiontext}`;
        header1.style.color = `${this.header1color}`;
        body.style.backgroundPosition = "center";
        body.style.transition = "all 3s ease-in-out";
        header1.style.transition = "all 3s ease-in-out";
        photoCredit.style.marginTop = "45em";
        photoCredit.style.fontSize = ".7rem";
        photoCredit.style.transition = "all 3s ease-in-out";
        photoCredit.style.color = `lightgrey`;
        photoCredit.textContent = `${this.photocredittext}`; 
    }

    removeBackgroundImage() {
        body.style.backgroundImage = ``;
        body.style.transition = "all 3s ease-in-out";
        header1.textContent = ``;
        photoCredit.textContent = ``;
        photoCredit.style.transition = "all 3s ease-in-out";
    }
}

//create a way to render the scene for first choice A, initiate liftoff!

choiceABtn.addEventListener("click", function(e) {
    e.preventDefault();
    greet1.innerText = "";
    paragraph.style.padding = "1em";
    inputElement.style.display = "none";
    choiceABtn.classList.add("hidden");
    choiceBBtn.classList.add("hidden");
      var scene1 = new Scene(`indigo`, `aqua`, `PAL: Excellent work, ${person1.name}.  We've arrived at Mars
        without incident.  The passengers have alread begun to offload the necessary resources to build 
        a flourishing settlement.  Should we debrief and take shore leave?`, `Photo by mohammad alizade on Unsplash`,
    `/Users/casvalkyriespicer/Documents/GitHub/oop-space-odyssey/pics/marsinspace.jpeg`, `MARS MISSION: COMPLETE`, `white`);
    setTimeout(function() {
        scene1.fadeIn();
        paragraph.style.transition = "all 3s ease-in-out";
        paragraph.textContent = `You're right PAL, we have a job to do.  
        Amazing scientific discovery or not, I've get to get these people to their new home before we lose too much of the solar wind.`;
    }, 2500);

    setTimeout(function() {
        scene1.fadeOut()
    }, 6500);

   setTimeout(function() {
             scene1.addBackgroundImage()
             choiceCBtn.textContent = `No, let's take a rover across the surface.`
             choiceDBtn.textContent = `Yes, but first you and I need to talk.`
             body.removeChild(helloDiv);
             choiceCBtn.classList.remove("hidden");
             choiceDBtn.classList.remove("hidden");
             choiceCBtn.style.margin = "0 .5em 0 .5em";
             choiceDBtn.style.margin = "0 .5em 0 .5em";
             inputElement.style.margin = "0";
             paragraph.style.margin = ".5em";
             paragraph.style.padding = ".5em";
            }, 9500);

    setTimeout(function(){
        scene1.changeP()
    }, 12500);
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
       var scene1Alt = new Scene(`#400020`, `#67FCC2`, `PAL: Welcome to Milky Way Section X216, Anomaly of unknown origin.  By my calculations, this is an active superheated gaseous nebula spinning 36 million
        times per second and generating a fine cosmic dust containing every element in the periodic table, including 11 not yet identified.`,
        `photo by Aldebaran S on Unsplash`, `/Users/casvalkyriespicer/Documents/GitHub/oop-space-odyssey/pics/aldebaran-nebula.jpeg`, `SECTION X216: 90 Thousand Light Years from the X216 Anomaly`, `white`);
    setTimeout(function() {
        scene1Alt.fadeIn();
        paragraph.style.transition = "all 3s ease-in-out";
        paragraph.textContent = `This opportunity is once in a lifetime.  I don't even care if I get reprimanded, PAL. I have to take a quick detour to investigate!`;
    }, 2500);

    setTimeout(function() {
        scene1Alt.fadeOut()
    }, 6500);

    setTimeout(function(){
             scene1Alt.addBackgroundImage()
             choiceEBtn.textContent = `Take me in closer PAL.`
             choiceFBtn.textContent = `PAL, please perform a full spectrum analysis.`
             body.removeChild(helloDiv);
             choiceEBtn.classList.remove("hidden");
             choiceFBtn.classList.remove("hidden");
             choiceEBtn.style.margin = "0 .5em 0 .5em";
             choiceFBtn.style.margin = "0 .5em 0 .5em";
             //input.style.margin = "0";
             paragraph.style.margin = ".5em";
             paragraph.style.padding = ".5em";
    }, 9500);

    setTimeout(function() {
        scene1Alt.changeP()
    }, 12500);

});

//create a way to render the scene for first choice C (take a rover across surface) after choice A (initiate liftoff):

choiceCBtn.addEventListener("click", function(e) {
    e.preventDefault();
    greet1.innerText = "";
    paragraph.innerText = "";
    inputElement.style.display = "none";
    choiceCBtn.classList.add("hidden");
    choiceDBtn.classList.add("hidden");
    var scene2 = new Scene(`peru`, `#332B00`, `You see a message on your rover's HUD. It states 'Anomaly Detected: Unidentified Lifeform two kilometers north'`,
        `photo by Aldebaran S on Unsplash`, `/Users/casvalkyriespicer/Documents/GitHub/oop-space-odyssey/pics/marsrover.jpeg`, `MARTIAN SURFACE`, `#7F0000`);  
        
        setTimeout(function() {
            scene2.removeBackgroundImage()
        }, 1000);

        setTimeout(function() {
            scene2.fadeIn();
            paragraph.style.transition = "all 3s ease-in-out";
            paragraph.textContent = `You put on your pressurized suit and protective gear.  You drive the rover out onto the
                martian soil.  You drive past the fledgling settlements and the martian horizon stretches before you.`;      
        }, 2500);

        setTimeout(function() {
            scene2.fadeOut()
        }, 6500);

            setTimeout(function(){
                scene2.addBackgroundImage()
                choiceEBtn.textContent = `Investigate Lifeform`
                choiceFBtn.textContent = `Return to the Settlement`
                choiceEBtn.classList.remove("hidden");
                choiceFBtn.classList.remove("hidden");
                choiceEBtn.style.margin = "0 .5em 0 .5em";
                choiceFBtn.style.margin = "0 .5em 0 .5em";
                //input.style.margin = "0";
                paragraph.style.margin = ".5em";
                paragraph.style.padding = ".5em";
    }, 9500);

        setTimeout(function() {
            scene2.changeP()
        }, 12500);
});

//create a way to render a new scene for choice D, 'yes but first you and I need to talk' - shore leave:

choiceDBtn.addEventListener("click", function(e) {
    e.preventDefault();
    greet1.innerText = "";
    paragraph.innerText = "";
    inputElement.style.display = "none";
    choiceCBtn.classList.add("hidden");
    choiceDBtn.classList.add("hidden");
    var scene2Alt = new Scene(`grey`, `#CCCCCC`, `Oh, you're looking for information on the God star? That's what we call it around here. My friend here can give you insider information - in fact, we're due for a sighting in a few hours.`,
        `Photo by RODNAE Productions from Pexels`, `/Users/casvalkyriespicer/Documents/GitHub/oop-space-odyssey/pics/marslocals.jpeg`, `Mars Majorus, Established 2071`, `#D5BEBE`);  
        
        setTimeout(function() {
            scene2Alt.removeBackgroundImage()
        }, 1000);

        setTimeout(function() {
            scene2Alt.fadeIn();
            paragraph.style.transition = "all 3s ease-in-out";
            paragraph.textContent = `PAL, this is important: Erase our conversation from before about exploring the anomaly, then record all data from the flight log and download it into the main computer.  I'm going to try to find some information on that anomaly from the locals.  PAL: I will, ${person1.name}.  Don't worry.  your secret is safe with me.`;      
        }, 2500);

        setTimeout(function() {
            scene2Alt.fadeOut()
        }, 6500);

            setTimeout(function(){
                scene2Alt.addBackgroundImage()
                choiceEBtn.textContent = `Investigate Lifeform`
                choiceFBtn.textContent = `Return to the Settlement`
                choiceEBtn.classList.remove("hidden");
                choiceFBtn.classList.remove("hidden");
                choiceEBtn.style.margin = "0 .5em 0 .5em";
                choiceFBtn.style.margin = "0 .5em 0 .5em";
                //input.style.margin = "0";
                paragraph.style.margin = ".5em";
                paragraph.style.padding = ".5em";
    }, 9500);

        setTimeout(function() {
            scene2Alt.changeP()
        }, 12500);

})

//PAL, I'm going out there.  But this stays off the flight log.  Clear?  We wouldn't want flight control knowing of our little diversion.  PAL: Understood, ${person1.name}. Disabling flight log now.