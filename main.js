// Tarea 1: define las variables:
let screen_width = 0;
let screen_height = 0;
let apple = "";
let speak_data = "";
let to_number = "";

// Tarea 2: carga una imagen:
function preload() {
  apple = loadImage("manzana.png");
}

// Tarea 3: dentro de la función recognition.onresult, añade el siguiente código:
to_number = Number(content);
if (Number.isInteger(to_number)) {
  state = "Se empezó a dibujar una manzana";
  draw_apple = "set";
} else {
  state = "No se reconoció un número";
}

// Tarea 4: dentro de la función setup() añade el siguiente código:
screen_width = window.innerWidth();
screen_height = window.innerHeight() - 150;
createCanvas(screen_width, screen_height);
canvas.position(0, 150);

// Tarea 5: Añade el siguiente código dentro de la función draw():
if (draw_apple == "set") {
  for (let i = 1; i <= to_number; i++) {
    let x = Math.floor(Math.random() * 700);
    let y = Math.floor(Math.random() * 400);
    image(apple, x, y, apple.width, apple.height);
  }
  speak_data = to_number + " manzanas dibujadas";
  speak();
}