//Esta es mi prueba para saber si está vinculado el JS y puedo verlo en la consola//
let num1 = 2;
let num2 = 3;
let resultado = num1 + num2;
console.log(resultado);

alert ("Hola, bienvenido a mi OnePage");

const menuItems = document.querySelectorAll('.nav');
menuItems.forEach(function (el){
    el.addEventListener('click', function(e) {
        const currentItem = document.querySelector('.active');
        e.target.classList.add('active');
        currentItem.classList.remove('active');
});
});

const buttonA = document.querySelector("#mas");
const headingA = document.querySelector("#mas_A");
buttonA.onclick = () => {
  const name = prompt("Cuál es tu nombre?");
  alert(`Hola ${name}, además de ser aprendiz en el desarrollo web también soy abogada penalista, especialista en documentación de casos de crímenes de lesa humanidad. Debido a mi cambio de contexto y de país, estoy comenzando a incursionar en otras áreas como el mundo del Front-end`);
};

const botonCambio = document.getElementById('modo');
botonCambio.addEventListener('click',() => {
  document.body.classList.toggle('dark');
  botonCambio.classList.toggle('active');
});