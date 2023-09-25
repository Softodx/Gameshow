const elementsActive1 = document.querySelector(".element-active1");
const elementsDestiny1 = document.querySelector(".element-destiny1");

const elementsActive2 = document.querySelector(".element-active2");
const elementsDestiny2 = document.querySelector(".element-destiny2");

const elementsActive3 = document.querySelector(".element-active3");
const elementsDestiny3 = document.querySelector(".element-destiny3");

const elementsActive4 = document.querySelector(".element-active4");
const elementsDestiny4 = document.querySelector(".element-destiny4");

const elementsActive5 = document.querySelector(".element-active5");
const elementsDestiny5 = document.querySelector(".element-destiny5");

const elementsActive6 = document.querySelector(".element-active6");
const elementsDestiny6 = document.querySelector(".element-destiny6");

const elementsActive7 = document.querySelector(".element-active7");
const elementsDestiny7 = document.querySelector(".element-destiny7");

const elementsActive8 = document.querySelector(".element-active8");
const elementsDestiny8 = document.querySelector(".element-destiny8");

elementsActive1.addEventListener("mouseover", ()=>{
  elementsDestiny1.textContent = "Baldurs Gate 3 es un juego de rol, inspirado en el juego de mesa 'Dungeons and Dragons' usando sus reglas y su diseño de mundo, en este juego puedes aventurarte en un sinfin de historias donde tus decisiones influyen en tu camino e historia.";
})
elementsActive1.addEventListener("mouseout", ()=>{
  elementsDestiny1.textContent = "";
})

elementsActive2.addEventListener("mouseover", ()=>{
  elementsDestiny2.textContent = "Segunda entrega del titulo Blasphemous, basado en la historia despues del DLC 'Wounds of Eventide' del juego original, donde se anuncio el regreso del Milagro y se profetizó el nacimiento de un nuevo mesias.";
})
elementsActive2.addEventListener("mouseout", ()=>{
  elementsDestiny2.textContent = "";
})

elementsActive3.addEventListener("mouseover", ()=>{
  elementsDestiny3.textContent = "Segunda entrega de Zelda Breath of the Wild, un mundo abierto donde la interacion con el entorno crecio en gran medida, pues al tener nuevos poderes de combinacion las posibilidades de explorar los mapas (El cielo, la superficie y el subsuelo) ademas luchar, se hace mas divertido recorrer Hyrule";
})
elementsActive3.addEventListener("mouseout", ()=>{
  elementsDestiny3.textContent = "";
})

elementsActive4.addEventListener("mouseover", ()=>{
  elementsDestiny4.textContent = "Con la larga trayectoria de FromSoftware en el sector de los juegos de robots (o mecas) y su característica jugabilidad, ARMORED CORE VI FIRES OF RUBICON suma una nueva experiencia de acción a la serie.";
})
elementsActive4.addEventListener("mouseout", ()=>{
  elementsDestiny4.textContent = "";
})

elementsActive5.addEventListener("mouseover", ()=>{
  elementsDestiny5.textContent = "Un mundo inmenso te aguarda en Lords of the Fallen, un nuevo RPG de acción y fantasía con tintes oscuros. Ponte en la piel de uno de los míticos Cruzados de la Oscuridad y emprende una gesta para derrocar a Adyr, el Dios Demonio.";
})
elementsActive5.addEventListener("mouseout", ()=>{
  elementsDestiny5.textContent = "";
})

elementsActive6.addEventListener("mouseover", ()=>{
  elementsDestiny6.textContent = "juego casual de rol y aventuras para un solo jugador que incluye elementos de pesca y exploración del fondo marino durante el día y de gestión de un restaurante de sushi durante la noche, con una gran cantidad de contenido donde no te cansaras de jugar.";
})
elementsActive6.addEventListener("mouseout", ()=>{
  elementsDestiny6.textContent = "";
})

elementsActive7.addEventListener("mouseover", ()=>{
  elementsDestiny7.textContent = "La muy esperada secuela de uno de los shooters cooperativos más populares que existen. Desde su lanzamiento, los jugadores de PAYDAY han disfrutado de la emoción de un trabajo perfectamente planeado y ejecutado.";
})
elementsActive7.addEventListener("mouseout", ()=>{
  elementsDestiny7.textContent = "";
})

elementsActive8.addEventListener("mouseover", ()=>{
  elementsDestiny8.textContent = "Sea of Stars es un RPG por turnos inspirado en los clásicos. Cuenta la historia de dos Hijos del Solsticio que combinarán los poderes del sol y la luna para realizar Magia Eclipse, la única fuerza capaz de defenderse de las monstruosas creaciones del malvado alquimista conocido como El Carnicero.";
})
elementsActive8.addEventListener("mouseout", ()=>{
  elementsDestiny8.textContent = "";
})


const button = document.querySelector('.button-menu')
const nav = document.querySelector('.nav-menu')

button.addEventListener('click',()=>{
    nav.classList.toggle('activo')
})
