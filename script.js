//Project cards and overlays generation==================================

//project info
//copy object. Grid areas must be added to definition in the css (_project-cards.scss media query ~ line 54)

const calculatorProject = {
    id: 'calculator',
    title : 'JS Calculator',
    imageSrc : 'https://picsum.photos/500/500',
    description: 'A basic calculator built using html Sass/CSS and javascript. Performs basic maths according to BODMAS and can accept variables as inputs.',
    techUsed: [['html','fa-html5'],['sass','fa-sass'],['javascript','fa-js']],
    siteLink : 'https://calculator.vulirussell.io/',
    githubLink: 'https://github.com/vuli-russell/JS-calculator',
    gridArea: 'a',
    //placeholder
    color: '#cddc39'
};

const dummyProjectB = {
    id: 'dummyB',
    title : 'Dummy Project B',
    imageSrc : 'https://picsum.photos/500/500',
    description: 'some text ',
    techUsed: [['html','fa-html5'],['css','fa-css3'],['javascript','fa-js']],
    siteLink : '...',
    githubLink: '...',
    gridArea: 'b',
    color: '#03a9f4'
};

const dummyProjectC = {
    id: 'dummyC',
    title : 'Dummy Project C',
    imageSrc : 'https://picsum.photos/500/500',
    description: 'some text ',
    techUsed: [['html','fa-html5'],['css','fa-css3'],['javascript','fa-js']],
    siteLink : '...',
    githubLink: '...',
    gridArea: 'c',
    color: '#e91e63'
};


const projects = [calculatorProject,dummyProjectB,dummyProjectC];

//html generation==============================================================================

//project cards
const projectCardsContainer = document.querySelector('.project-cards-container');

const generateProjectCards = (projectArray,container) => {
    projectArray.forEach(project => {
        const article = document.createElement('article');
        article.id =project.id;
        article.style.backgroundColor = project.color;
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
        img.setAttribute('src',project.imageSrc);

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
            const li = document.createElement('li');
            li.innerText = tech[0];
            const i = document.createElement('i');
            i.classList.add('fab',tech[1]);
            li.append(i);
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
//flickering on page load
const flicker = (element) => {
    element.classList.toggle("lights-on");
};

const heading = document.querySelector("h1");

for(i=0;i<11;i++){
    setTimeout(flicker,Math.random()*5000,heading);
};

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

