

window.addEventListener("scroll",()=>{
    const scrolled = window.scrollY;

    console.log(scrolled);

    if(scrolled > 290){
        document.querySelector("nav").style.display = "none";
    }else{
        document.querySelector("nav").style.display = "flex";
    }


    if(scrolled > 305){
        document.querySelector(".filterContainer").style.position = "fixed";
        document.querySelector(".filterContainer").style.width = "100%";
        document.querySelector(".filterContainer").style.top = "0px";
    }else{
        document.querySelector(".filterContainer").style.position = "static";
        document.querySelector(".filterContainer").style.width = "85%";
    }
    
})

//toggle button 

let toggleFlag = false;
// let addBtnToggle = fase
document.querySelector(".moreTagBtn").addEventListener("click",()=>{

    if(toggleFlag){
        document.querySelector("header").style.height = "340px"
        document.querySelector(".tagContainer").style.height = "110px"
        document.querySelector(".addToggle").innerHTML = "+";
        toggleFlag = false;
        
    }else{
        document.querySelector("header").style.height = "650px"
        document.querySelector(".tagContainer").style.height = "440px"
        document.querySelector(".addToggle").innerHTML = "x";
        toggleFlag = true;
        // addBtnToggle = true;
    }
})
