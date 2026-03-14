//Close offer bar
var offer=document.querySelector(".offer");
var closex=document.getElementById("close-X")

closex.addEventListener("click",function(){
    offer.style.display="none";
})
//sidenavbar
var sideNav = document.querySelector(".side-navbar-links");

function openNav() {
    sideNav.style.left = "0";
}

function closeNav() {
    sideNav.style.left = "-60%";
}
//Hero section
 var slides = document.querySelector(".slides")

var index = 0
var totalSlides = document.querySelectorAll(".slide").length

function nextSlide(){

index++

if(index >= totalSlides){
index = 0
}

slides.style.transform = "translateX(-" + index * 100 + "%)"

}

function prevSlide(){

index--

if(index < 0){
index = totalSlides - 1
}

slides.style.transform = "translateX(-" + index * 100 + "%)"

}
//Most wanted
var likebuttons=document.querySelectorAll(".like-button")

likebuttons.forEach((btn)=>{
    btn.addEventListener("click",function(e){
        
        
        if(e.target.src.indexOf("blackheart")>0)
        {
            console.log("jkjk");
            e.target.src="./images/redheart.png"
        }
        else{
            e.target.src="./imges/blackheart.png"
        }
    })
})

window.addEventListener("scroll",function(){
    var elements = this.document.querySelectorAll(".initial-scroll-animate")
    elements.forEach((el)=>{
        windowHeight = window.innerHeight
     var elbound = el.getBoundingClientRect()
   

     console.log(windowHeight)
     console.log(elbound.top)
     if(windowHeight>elbound.top-100){
        console.log("Hi")
    el.classList.remove("reveal-scroll-animate")

    }
    
})
    
})