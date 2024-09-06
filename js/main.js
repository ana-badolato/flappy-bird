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






//* FUNCIONES GLOBALES DEL JUEGO
function startGame() {
  console.log("Iniciando juego");

  // 1. Cambiar las pantallas
  splashScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";

  // 2. Añadir todos los elementos iniciales del juego
  let pollitoObj = new Pollito();
  // 3. Iniciar el intervalo de juego
  setInterval(() => {
    // console.log("Intervalo andando");
    gameLoop();
  }, Math.round(1000/60)); // 60 fps

  // 4. (Opcional) Iniciaremos otrs intervalos que requiera el juego

}

function gameLoop() {
  // Se ejecuta 60 veces por segundo en el intervalo principal
}



//* EVENT LISTENERS
startBtnNode.addEventListener("click", startGame); //le pasamos la función sin () porque no la invocamos



