class Tuberia {

  constructor(positionY, type){

    this.x = gameBoxNode.offsetWidth; //para que empiece justo desde fuera de la gameBox
    this.y = positionY; //* Valor dinámico (Se asigna al crearlo)
    this.h = 220; //* Valor estático (siempre es igual)
    this.w = 55;
    this.speed = 2;

    // al crear cada tuberia:

    // 1. añadir la tuberia al DOM
    this.node = document.createElement("img");
    if(type === "top"){
      this.node.src = "./images/obstacle_top.png"; // asignamos la imagen
    }else if(type === "bottom"){
      this.node.src = "./images/obstacle_bottom.png";
    }
 
    gameBoxNode.append(this.node);

    // 2. Ajustamos sus dimensiones y posiciones
    this.node.style.width = `${this.w}px`
    this.node.style.height = `${this.h}px`
    this.node.style.position = "absolute" // nos permite ajustar el top y el left
    this.node.style.top = `${this.y}px`
    this.node.style.left = `${this.x}px`

  }

  automaticMovement() {
    this.x-=this.speed;
    this.node.style.left = `${this.x}px`
  }
}