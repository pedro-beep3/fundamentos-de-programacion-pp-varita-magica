let enlaces = document.querySelectorAll("a");
enlaces.forEach((enlaces) => {
    enlaces.addEventListener("click", function(event){
        event.preventDefault();
        console.log("enlace cancelado en:", enlaces.href);
});
});
let getimg = document.querySelector("body");
     getimg.addEventListener("click", function(event){
        let eventvar = event.target;
        let eventtagname = eventvar.tagName;
        console.log(eventtagname)
        if (eventtagname === "IMG"){
            eventvar.src = './assets/magic-1.gif'
        }
    })
    
document.addEventListener("click", function(event){
    let gettarget = event.target;
    let gettargetname = gettarget.tagName;
    if (gettargetname === 'P'){
        gettarget.style.setProperty("color", "red", "important")
        gettarget.style.fontColor = 'red';
        gettarget.style.backgroundColor = 'green';
    }
});
document.addEventListener('click', function(event){
    let setTarget2 = event.target;
    let setTargetName2 = setTarget2.tagName;
    console.log(setTargetName2);
        if (setTargetName2 === 'SECTION' || setTargetName2 === 'ARTICLE'){
            setTarget2.style.backgroundColor = 'black';
        }
})