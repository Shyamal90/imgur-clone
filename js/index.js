

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
    }
    
})

//toggle button 

let toggleFlag = true;
document.querySelector(".moreTagBtn").addEventListener("click",()=>{

    if(toggleFlag){
        document.querySelector("header").style.height = "600px"
        toggleFlag = false;
    }else{
        document.querySelector("header").style.height = "200px"
        toggleFlag = true;
    }
})
