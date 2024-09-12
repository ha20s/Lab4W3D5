let gobtn = document.getElementById("goButton")
let slowbtn = document.getElementById("slowButton")
let stopbtn = document.getElementById("stopButton")

let golight = document.getElementById("goLight")
let stoplight = document.getElementById("stopLight")
let slowlight = document.getElementById("slowLight")


stopbtn.addEventListener("click" , ()=>{
    stoplight.style.backgroundColor = "red"
        golight.style.backgroundColor = "black"
        slowlight.style.backgroundColor = "black"

})


slowbtn.addEventListener("click" , ()=>{
    
    slowlight.style.backgroundColor = "yellow"
    stoplight.style.backgroundColor = "black"
    golight.style.backgroundColor = "black"
})

gobtn.addEventListener("click" , ()=>{
    golight.style.backgroundColor = "green"
        slowlight.style.backgroundColor = "black"
    stoplight.style.backgroundColor = "black"

})

