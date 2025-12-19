
    const openpp=document.querySelector("#pop-open");
    const closepp=document.querySelector("#pop-close");
    const pop=document.querySelector(".popup");


    openpp.addEventListener("click",()=>{
        pop.classList.add("open");
        
    });
    closepp.addEventListener("click",()=>{
        pop.classList.remove("open");
        
    });
