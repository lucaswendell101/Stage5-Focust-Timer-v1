import f from "./functions.js"
import sound from "./sounds.js"


let minutes  = document.querySelector(".minutes")
let seconds = document.querySelector(".seconds")
const play = document.querySelector(".play")
const pause = document.querySelector(".pause")
const btnStop = document.querySelector(".stop")
const plus = document.querySelector(".plus")
const less = document.querySelector(".less")
const tree = document.querySelector(".tree")
const store = document.querySelector(".store")
const fire = document.querySelector(".fire")
const rain = document.querySelector(".rain")

let newSeconds = 10
let newMinutes = Number(minutes.textContent)
let auxMinutes = Number(minutes.textContent)

const functions = f({
  play, pause, seconds, minutes, newMinutes, newSeconds, auxMinutes, tree, store, fire, rain
})

const sounds = sound({})

 //events

 play.addEventListener("click", ()=>{
  functions.countdown()
  functions.playClock()
  
 })
 pause.addEventListener("click",()=>{
  functions.pauseClock()
  clearTimeout(functions.hold())

 })
 btnStop.addEventListener("click",()=>{
  clearTimeout(functions.hold())
  functions.pauseClock()
   functions.reset() 
   ativa=0

   if (true){
    sounds.bgStop()
   }
   
  }
  )

plus.addEventListener("click",()=>{
  functions.plusFive()})

less.addEventListener("click",()=>{ 
  functions.lessFive()})

//events sound

let ativa=0

fire.addEventListener("click", ()=>{
  fire.classList.toggle("addBg")
  fire.classList.toggle("addIcon")
  ativa++
  if (ativa  % 2 ==1 ){
    sounds.bgFire()
  } else {
    sounds.bgStop()
    ativa=0
  }
  
})
rain.addEventListener("click", ()=>{
  rain.classList.toggle("addBg")
  rain.classList.toggle("addIcon")
  ativa++
  if (ativa  % 2 ==1){
    sounds.bgRain()
    
  } else {
    sounds.bgStop()
    ativa=0    
  }
  
  
})
store.addEventListener("click", ()=>{
  store.classList.toggle("addBg")
  store.classList.toggle("addIcon")
  ativa++
  if (ativa  % 2 ==1){
    sounds.bgCafe()
    
  } else {
    sounds.bgStop()
    ativa=0
  }
  
})
tree.addEventListener("click", ()=>{
  tree.classList.toggle("addBg")
  tree.classList.toggle("addIcon")
  ativa++
  if (ativa  % 2 ==1){
    sounds.bgFlorest()
    
  } else {
    sounds.bgStop()
    ativa=0
  }
  
})


 