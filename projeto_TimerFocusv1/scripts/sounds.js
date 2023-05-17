
export default function Sounds(){

let soundFlorest = new Audio("./sounds/Floresta.wav")
let soundFire = new Audio("./sounds/Lareira.wav")
let soundCafe = new Audio("./sounds/Cafeteria.wav")
let soundRain = new Audio("./sounds/Chuva.wav")

function bgFlorest(){
  soundFlorest.play()
}
function bgFire(){
  soundFire.play()
}
function bgStop(){
  soundFire.pause();
  soundCafe.pause();
  soundRain.pause();
  soundFlorest.pause();
}
function bgCafe(){
  soundCafe.play()
}
function bgRain(){
  soundRain.play()
}

return {
  bgFlorest,
  bgFire,
  bgRain,
  bgCafe,
  bgStop
}
}
