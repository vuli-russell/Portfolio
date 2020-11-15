//Project cards and overlays generation==================================

//project info
//copy object. Grid areas must be added to definition in the css (_project-cards.scss media query ~ line 54)


const projects = [

    {
        id: 'calculator',
        title : 'JS Calculator',
        overlayImageSrc : './img/project-images/calculator/overlay.png',
        cardImageSrc: './img/project-images/calculator/card.png',
        description: 'A basic calculator built using html Sass/CSS and javascript. Performs basic maths according to BODMAS and can accept variables as inputs.',
        techUsed: ['html','sass','javascript'],
        siteLink : 'https://calculator.vulirussell.io/',
        githubLink: 'https://github.com/vuli-russell/JS-calculator',
        gridArea: 'a',
    },

    {
        id: 'dodgeGame',
        title : 'Dodge Game',
        overlayImageSrc : './img/project-images/dodge-game/overlay.png',
        cardImageSrc: './img/project-images/dodge-game/card.png',
        description: 'A simple dodge game made with HTML, SCSS and JS.',
        techUsed: ['html','sass','javascript'],
        siteLink : 'https://dodge-game.vulirussell.io/',
        githubLink: 'https://github.com/vuli-russell/dodge-game',
        gridArea: 'b',
    },

    {
        id: 'toDoList',
        title : 'To Do List',
        overlayImageSrc : './img/project-images/toDoList/overlay.png',
        cardImageSrc: './img/project-images/toDoList/card.png',
        description: 'A To Do List, built with React. To do Items stored on mongoDB and accessed via a nodeJS api. Login handled by Firebase Authentication',
        techUsed: ['react','sass','javascript',"firebase","nodejs","mongodb","express"],
        siteLink : 'https://todolist.vulirussell.io/',
        githubLink: 'https://github.com/vuli-russell/toDoSite',
        gridArea: 'c',
    },

    {
        id: 'brewdog',
        title : 'Brewdog Catalogue',
        overlayImageSrc : './img/project-images/brewdog-api/overlay.png',
        cardImageSrc: './img/project-images/brewdog-api/card.png',
        description: 'Gallery of Brewdogs beers pulled from punkAPI built in react. Search through beers and login with Google to save favourites.',
        techUsed: ['react','sass','javascript',"firebase"],
        siteLink : 'https://brewdog.vulirussell.io/',
        githubLink: 'https://github.com/vuli-russell/brewdogAPI',
        gridArea: 'd',
    },

    {
        id: 'morseCodeTranslator',
        title : 'Morse Code Translator',
        overlayImageSrc : './img/project-images/morseCode/overlay.png',
        cardImageSrc: './img/project-images/morseCode/card.png',
        description: 'Morse Code Translator build in HTML, SCSS and JS',
        techUsed: ['html','sass','javascript'],
        siteLink : 'https://morse-code.vulirussell.io/',
        githubLink: 'https://github.com/vuli-russell/morse-code-translator',
        gridArea: 'e',
    },

    {
        id: 'shiftReporter',
        title : 'Shift Reporter',
        overlayImageSrc : './img/project-images/shiftReporter/overlay.png',
        cardImageSrc: './img/project-images/shiftReporter/card.png',
        description: 'MVP for a website to track work done across a Mine, aimed at the South African Mining industry. Completed project for a real Client as part of the _noloy Course. Built using react, with a firestore database and firebase authentication for user login.',
        techUsed: ['react','sass','javascript',"firebase"],
        siteLink : 'https://shiftreporter-3420e.firebaseapp.com/',
        githubLink: 'https://github.com/jackroy08/ShiftReporter',
        gridArea: 'f',
    }
];


//html generation==============================================================================

//project cards
const projectCardsContainer = document.querySelector('.project-cards-container');

const generateProjectCards = (projectArray,container) => {
    projectArray.forEach(project => {
        const article = document.createElement('article');
        article.id =project.id;
        if(project.cardImageSrc){
            article.style.backgroundImage = `url(${project.cardImageSrc})`;
        }else{
            article.style.backgroundColor = project.color;
        }
        article.style.gridArea = project.gridArea;
        const div = document.createElement('div');
        const hr1 = document.createElement('hr');
        const h3 = document.createElement ('h3');
        h3.innerText = project.title;
        const i = document.createElement('i');
        i.classList.add('fas', 'fa-angle-right');
        const hr2 = document.createElement('hr');

        div.append(hr1,h3,i,hr2);
        article.append(div);
        container.append(article);
    });
};

//project overlay info
const projectDetailsOverlay = document.querySelector(".project-details-overlay");

const generateProjectOverlays = (projectArray,container) => {
    projectArray.forEach(project => {

        //article
        const article = document.createElement('article');
        article.classList.add('project-details');
        
        //mouse close button
        const mouseClose = document.createElement('button');
        mouseClose.classList.add("mouse-project-details-close");
        const mouseIcon = document.createElement('i');
        mouseIcon.classList.add('fas', 'fa-times');
        mouseClose.append(mouseIcon);

        //div
        const div = document.createElement('div');
        div.classList.add('project-details-content-container');

        //img
        const img = document.createElement('img');
        img.setAttribute('src',project.overlayImageSrc);

        //p
        const p = document.createElement('p');
        p.innerText = project.description;

        //1st hr
        const hr1 = document.createElement('hr');

        //h3
        const h3 = document.createElement('h3');
        h3.innerText = 'Tech Used';

        //ul
        const ul  = document.createElement('ul')
        
        project.techUsed.forEach(tech=>{
            const li = document.createElement('li')
            li.innerHTML = `<p>${tech}<i class="extraIcon"><img src="./img/skillsIcons/${tech}.svg" alt=""></i></p>`;
            ul.append(li);
        });

        //github link
        const githubLink = document.createElement('a');
        githubLink.setAttribute('href',project.githubLink);
        githubLink.setAttribute('target','blank');
        githubLink.setAttribute('content', 'code');
        
        const githubIcon = document.createElement('i');
        githubIcon.classList.add('fab', 'fa-github');
        githubLink.append(githubIcon);

        //site link
        const siteLink = document.createElement('a');
        siteLink.setAttribute('href',project.siteLink);
        siteLink.setAttribute('target','blank');
        siteLink.setAttribute('content', 'site');
        
        const siteIcon = document.createElement('i');
        siteIcon.classList.add('fas', 'fa-eye');
        siteLink.append(siteIcon);

        //2nd hr
        const hr2 = document.createElement('hr');

        //touch close button
        const touchClose = document.createElement('button');
        touchClose.classList.add("touch-project-details-close");
        const touchIcon = document.createElement('i');
        touchIcon.classList.add('fas', 'fa-angle-up');
        touchClose.append(touchIcon);

        div.append(img,p,hr1,h3,ul,githubLink,siteLink,hr2);
        article.append(mouseClose,div,touchClose);
        container.append(article);
    });
};

//call functions to generate html ================================================================================

generateProjectCards(projects,projectCardsContainer);
generateProjectOverlays(projects,projectDetailsOverlay);

//======================================================================================================

//page behaviors

//h2 text scrolling function
sectionHeadings = document.querySelectorAll("h2");

const swipe = (element,percent, color1, color2) => {
    element.style.background = `linear-gradient(79deg, ${color1} ${percent}%, ${color2} ${percent}%)`;
};

//disable and enable body scroll function
const body = document.querySelector("body");

const disableBodyScroll = () => {
    body.style.overflow = "hidden";  
};

const enableBodyScroll = () => {
    body.style.overflow = "";
};

// mobile nav bar 
const mobileNavIcon = document.querySelector("nav > .nav-icon-container");
const mobileNavItems = document.querySelector("nav > .nav-menu");

//show and hide nav icon
const showNavIcon = () => {
    mobileNavIcon.classList.add("shown");
};

const hideNavIcon = () => {
    mobileNavIcon.classList.remove("shown");
};

const navDot = document.querySelector('.location-dot');
const navAnchors = document.querySelectorAll('.nav-anchor');
const navheadings = document.querySelectorAll('.nav-menu a');

//setting as line so js can read with same function at start
navDot.style.transform = "rotate(0deg)";

const updateNavDot = () => {
    navAnchors.forEach((a,i)=> {
        if(a.getClientRects()[0].top < window.innerHeight*(1/4)){
            navDot.style.top = navheadings[i].getClientRects()[0].top + navheadings[i].getClientRects()[0].height/2 - 20; 
            // navDot.style.transform = `rotate(${parseInt(RegExp(/\d+/).exec(navDot.style.transform)[0])+360}deg)`;
        }
    })
};

//update nav dot on page load
updateNavDot();

//on scroll listeners
document.addEventListener("scroll",(e)=>{
    //show/hide nav icon on scroll
    if(scrollY>50){
        showNavIcon();
    }else {
        hideNavIcon();
    }

    // color swipes on scroll
    sectionHeadings.forEach((h2,i)=>{
        y = h2.getClientRects()[0].top;
        h = window.innerHeight;
        if(y>h/2-50&y<h){
            swipe(h2,100*(1-((y-h/2)/(h/2))),"#f2f2f2","#262526");
        };
        if(y<h/2-50&y>0-50){
            swipe(h2,20+(100*((y/(h/2)))),"#f2f2f2","#006daa");
        };
    });

    //nav location dot movement
    updateNavDot();

});

//open and close menu
const navOverlay = document.querySelector("nav .nav-overlay");

const openNav  = () => {
    mobileNavItems.classList.add("nav-shown");
    navOverlay.style.height = "100vh";
    disableBodyScroll();
}

const closeNav = () => {
    mobileNavItems.classList.remove("nav-shown");
    navOverlay.style.height = "0";
    enableBodyScroll();
};

//listener on icon to open
mobileNavIcon.addEventListener("click",openNav); 

// listener on overlay and menu to close
[navOverlay,mobileNavItems].forEach((e)=>{
    e.addEventListener("click",closeNav);
});

//listener on window to close nav, calculate nav dot location when in dekstop size

window.addEventListener("resize",(e)=>{
    if(e.target.innerWidth>=950){
        closeNav();
        updateNavDot();
    };
});

//open project details overlay
const projectCards = document.querySelectorAll(".project-cards-container > article");
const projectDetails = document.querySelectorAll(".project-details");

const openProjectDetails = (i) => {
    projectDetailsOverlay.classList.add("shown");
    setTimeout(()=>{projectDetails[i].classList.add("shown")},300);
    disableBodyScroll();
};

projectCards.forEach((card,index)=>{
    card.addEventListener("click",()=>{openProjectDetails(index)});
});

//close project details overlay
//there must be a way to do this more nicely, sets attribs on all project overlays - only 1 should be needed.

const projectDetailsCloseButtons = document.querySelectorAll(".project-details button");

const closeProjectDetails = () => {
    setTimeout(()=>{projectDetailsOverlay.classList.remove("shown")},300);
    projectDetails.forEach((d)=>{
        d.classList.remove("shown");
    });
    enableBodyScroll(); 
};


projectDetailsCloseButtons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        closeProjectDetails();
    });    
});

//close on click outside details box
projectDetailsOverlay.addEventListener("click", (e) => {
    if(e.srcElement.classList.contains("project-details-overlay")){
        closeProjectDetails();
    };
});

//canvas stuff

//element for canvas
const canvas = document.querySelector("canvas");

const header = document.querySelector('header');
canvas.width = header.clientWidth;
canvas.height = header.clientHeight;


//resize canvas

window.addEventListener("resize",function(){
    canvas.width = header.clientWidth;
    canvas.height = header.clientHeight;
    generateLines();
});

//canvas animation
//inputs
let numLines;
let color;
let gradient;
let width;
let circleColor;
let baseSpeed;
let radius;

const getInputs = function(){
    numLines = 7;
    color = 'rgba(150,150,150,0.3)';
    gradient = 2;
    width = 1;
    circleColor = 'rgba(150,150,150,0.3)';
    baseSpeed = 0.01;
    radius = 1;
};


const c = canvas.getContext("2d");

const drawLine = function(x1,y1,x2,y2,color,width,shadowColor){

    if(findDistance(x1,y1,x2,y2,mouse.x,mouse.y) < 50 && mouse.y < y1 +20){
        c.shadowColor = shadowColor;
        
        c.lineWidth = width/4;
        
        for(let i=0;i<3;i++) {
            c.beginPath();
            c.moveTo(x1,y1);
            c.lineTo(x2,y2);
            c.shadowBlur = (i+1)*5;
            c.strokeStyle = 'rgba(255,255,255,1)';
            c.stroke();
        }

        
    } else{
        c.shadowColor = "transparent"
        c.lineWidth = width;
        c.beginPath();
        c.moveTo(x1,y1);
        c.lineTo(x2,y2);
        c.strokeStyle = color;
        c.stroke();
    }
    c.beginPath();
    c.arc(x1,y1,radius,0,Math.PI*2,false);
    c.stroke();
    c.fillStyle = circleColor;
    c.fill();
}

const findDistance = function(x1,y1,x2,y2,x0,y0){
    return Math.abs((y2-y1)*x0-(x2-x1)*y0+x2*y1-y2*x1)/Math.sqrt((Math.pow((y2-y1),2))+(Math.pow((x2-x1),2)));
}


class Line {
    constructor(a,b,theta,k,h,speed,shadowColor){
        this.x = undefined; //x position
        this.y = undefined; //y position
        this.a = a; //oval "radius" horizontal
        this.b = b; //oval "radius" vertical
        this.theta = theta; // speed kind of
        this.k = k; //oval center x
        this.h = h; //oval center y
        this.speed = speed;
        this.shadowColor = shadowColor;
    }

    update() {
        this.x = this.a * Math.cos(this.theta) + this.k;
        this.y = this.b * Math.sin(this.theta) + this.h;
        
        let m = gradient;
        m = 1/m;
        let y2 = 0;
        let x2 = (m*(this.y))+this.x
        

        drawLine(this.x,this.y,x2,y2,color,width,this.shadowColor);

        this.theta+=this.speed*baseSpeed;
        
    }
}

const mouse = {
    x: undefined,
    y: undefined
};

document.addEventListener("mousemove",(e)=>{
    xOffset = canvas.getBoundingClientRect().x;
    yOffset = canvas.getBoundingClientRect().y;
    mouse.x = e.x - xOffset;
    mouse.y = e.y - yOffset;
})

lines = [];

const generateLines = () =>{
    lines = [];
    for(let i = 0;i<numLines;i++){
        a = (Math.random()*canvas.width)/2;
        b = (Math.random()*canvas.height)/2;
        theta = Math.random();
        k = Math.random()*canvas.width;
        h = Math.random()*canvas.height;
        speed = Math.random();
        shadowColor = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
        lines[i] = new Line(a,b,theta,k,h,speed,shadowColor)
    }
}

const animate=function(){
    if(lines.length!=numLines){
        generateLines();
    }
    getInputs();
    requestAnimationFrame(animate);
    c.clearRect(0,0,canvas.width,canvas.height);
    lines.forEach(element => {
        element.update();
    });
};

animate();

