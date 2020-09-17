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
            swipe(h2,20+(100*((y/(h/2)))),"#f2f2f2","#ff7b00");
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
        console.log(e.target.innerWidth);
        closeNav();
        updateNavDot();
    };
});

//open project details overlay
const projectCards = document.querySelectorAll(".project-cards-container > article");
const projectDetailsOverlay = document.querySelector(".project-details-overlay");
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
    button.addEventListener("click", (e)=>{
        closeProjectDetails();
    });    
});

//close on click outside details box
// projectDetailsOverlay.addEventListener("click", closeProjectDetails);
projectDetailsOverlay.addEventListener("click", (e) => {
    if(e.srcElement.classList.contains("project-details-overlay")){
        closeProjectDetails();
    };
});

//canvas stuff

//element for canvas
const canvas = document.querySelector("canvas");

canvas.width = document.body.clientWidth;
canvas.height = window.innerHeight;


//resize canvas
window.addEventListener("resize",function(){
    canvas.width = document.body.clientWidth;
    canvas.height = window.innerHeight;
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
    mouse.x = e.x;
    mouse.y = e.y;
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