//* ELEMENTOS PRINCIPALES DEL DOM

// pantallas
const splashScreenNode = document.querySelector("#splash-screen")
const gameScreenNode = document.querySelector("#game-screen")
const gameOverScreenNode = document.querySelector("#game-over-screen")

// botones
const startBtnNode = document.querySelector("#start-btn")

// game box
const gameBoxNode = document.querySelector("#game-box")


//* VARIABLES GLOBALES DEL JUEGO
let pollitoObj = null;
let tuberiasArray = [];
let frecuenciaTuberias = 1500;

let gameIntervalId = null;
let tuberiasIntervalId = null;
//let gameIsGoing = false;

//* FUNCIONES GLOBALES DEL JUEGO
function startGame() {

  // 1. Cambiar las pantallas
  splashScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";

  // 2. Añadir todos los elementos iniciales del juego
  pollitoObj = new Pollito();

  // 3. Iniciar el intervalo de juego
  gameIntervalId = setInterval(() => {
    gameLoop();
  }, Math.round(1000/60)); // 60 fps

  // 4. (Opcional) Iniciaremos otrs intervalos que requiera el juego
  tuberiasIntervalId = setInterval(() => {
    addTuberia();
  }, frecuenciaTuberias);

}

function gameLoop() {
  // Se ejecuta 60 veces por segundo en el intervalo principal
  pollitoObj.gravity();
  tuberiasArray.forEach((eachTuberia)=>{
    eachTuberia.automaticMovement();
  })
  checkTuberiaOut();
  detectCollisionPollitoTuberias();
}

function addTuberia() {
  let randomPositionTopY = Math.floor(Math.random() * (-150));



  let newTuberiaTop = new Tuberia(randomPositionTopY, "top");
  tuberiasArray.push(newTuberiaTop);

  let newTuberiaBottom = new Tuberia(randomPositionTopY + 330, "bottom");
  tuberiasArray.push(newTuberiaBottom);
  //console.log(tuberiasArray);
}

function checkTuberiaOut() {

  if (tuberiasArray.length === 0){
    return;
  }

  if ((tuberiasArray[0].x + tuberiasArray[0].w) <= 0){
    tuberiasArray[0].node.remove();// 1. sacar del DOM
    tuberiasArray.shift();// 2. Sacar de JS
    console.log(tuberiasArray.length);
  }
  
}

function detectCollisionPollitoTuberias() {


  // cada tuberia -> tuberiasArray -> forEach => cadaTuberia

  tuberiasArray.forEach((eachTuberia)=>{
      // pollito -> pollitoObj
      // tuberia => eachTuberia
      if(pollitoObj.x < eachTuberia.x + eachTuberia.w &&
        pollitoObj.x + pollitoObj.w > eachTuberia.x &&
        pollitoObj.y < eachTuberia.y + eachTuberia.h &&
        pollitoObj.y + pollitoObj.h > eachTuberia.y){
          gameOver();
        }

  })

}

function gameOver () {

  // 1. Limpiar los intervalos
  clearInterval(gameIntervalId);
  clearInterval(tuberiasIntervalId);

  //! Los pasos 2 y 3 deberían suceder al reiniciar el juego

  // 2. Limpiar la caja d ejuego
  // gameBoxNode.innerHTML = "" //cuando me choco todo desaparece

  // 3. Reiniciar todos los elementos del juego
  // pollitoObj = null;
  // tuberiasArray = [];

  // 4. Cambiar de pantalla
  gameScreenNode.style.display = "none";
  gameOverScreenNode.style.display = "flex";
  
}

//* EVENT LISTENERS
startBtnNode.addEventListener("click", startGame); //le pasamos la función sin () porque no la invocamos
gameBoxNode.addEventListener("click", () => {
  pollitoObj.jump();
})

//existe una función de remove event listener o declarar una variable global para determianr si el juego está en marcha o no.en start ponerlo a true y si el juego no está andando desactivar el salto del pollito.  
