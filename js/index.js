
let toggleFlag = false;

window.addEventListener("scroll",()=>{
    const scrolled = window.scrollY;

    // console.log(scrolled);

    if(scrolled > 290){
        document.querySelector("nav").style.display = "none";
    }else{
        document.querySelector("nav").style.display = "flex";
    }


    if(toggleFlag === false){
        if(scrolled > 305){
            document.querySelector(".filterContainer").style.position = "fixed";
            document.querySelector(".filterContainer").style.width = "100%";
            document.querySelector(".filterContainer").style.top = "0px";
            document.querySelector(".showSearchBar").style.visibility = "visible";
        }else{
            document.querySelector(".filterContainer").style.position = "static";
            document.querySelector(".filterContainer").style.width = "85%";
            document.querySelector(".showSearchBar").style.visibility = "hidden";
            document.querySelector(".filterContainer").style.background = 'url("https://s.imgur.com/desktop-assets/desktop-assets/homebg.e52b5cdf24f83bcd55f9f1318855f2ef.png")'
        }
    }
    
    
})

//toggle button 


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
