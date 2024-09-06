class Pollito{
  
  constructor() {

    // .todos los pollitos se crearán con estos valores
    this.x = 70;
    this.y = 60;
    this.h = 40;
    this.w = 45;
    this.gravitySpeed = 2;
    this.jumpSpeed = 35;

    // al crear el pollito:

    // 1. añadir el pollito al DOM
    this.node = document.createElement("img");
    this.node.src = "./images/flappy.png"; // asignamos la imagen
    gameBoxNode.append(this.node);

    // 2. Ajustamos sus dimensiones y posiciones
    this.node.style.width = `${this.w}px`
    this.node.style.height = `${this.h}px`
    this.node.style.position = "absolute" // nos permite ajustar el top y el left
    this.node.style.top = `${this.y}px`
    this.node.style.left = `${this.x}px`


  }

  gravity() {
    
    this.y+= this.gravitySpeed;
    //! SIEMPRE que modificamos posición o dimensión, ajustamos el nodo
    //nuestro elementos existen en dos entornos. El de JS y el DOM
    this.node.style.top = `${this.y}px`

    // condicional apra verificar si el pollito se estrelló contra el suelo
    if((this.y + this.h)>=gameBoxNode.offsetHeight){
      gameOver();
    }

  }

  jump(){

    this.y -= this.jumpSpeed;
    this.node.style.top = `${this.y}px`;

  }

}