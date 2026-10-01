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
target.style.setProperty("color", "red", "important");

























document.addEventListener('mouseenter', function(event){
let setTarget = event.target;
let setTargetName = setTarget.tagName;
console.log(setTargetName);
    if (setTargetName === 'P' || setTargetName === 'ARTICLE'){
        setTarget.style.backgroundColor = 'red';
    }
})