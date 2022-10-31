//DECLARACIÓN DE CONSTANTES

//Identificamos los botones
const dLeft = document.getElementById("dotLeft");
const dRight = document.getElementById("dotRight");

//****************EVENTOS****************

//--Objetos y funciones para los eventos--

//Objeto para que los evento se ejecuten una sóla vez
//Al desactivar el evento una vez se ejecute
const onceTime = {
  once: true
}

const movePx = () => {
    if (window.innerWidth >= 1700) return '240px';
    else return '140px';

    

  
}



//Movimiento a la izquierda
const moveLeft = (e) => {
  //Identificamos el carrusel seleccionado
  let carrusel;
  if(e.target.nodeName === 'IMG') carrusel = e.target.parentElement.parentElement.nextElementSibling;
  else carrusel = e.target.parentElement.nextElementSibling;
  //Identificamos el primer elemento
  const imgFirst = carrusel.querySelectorAll(".img")[0];
  

  //Aplicamos la animación
  carrusel.style.transition = "transform .5s linear";
  carrusel.style.transform = `translateX(-${movePx()})`;
  actualizarEstilos("left", carrusel);

  //Colocamos la primera imagen en última posición
  setTimeout(() => {
    carrusel.insertAdjacentElement("beforeend", imgFirst);
    carrusel.style.transition = "none";
    carrusel.style.transform = "translateX(0px)";
    //Volvemos a activar el evento, si no sólo se ejecutaría el evento una vez
    if(e.target.nodeName === 'IMG') e.target.parentElement.addEventListener("click", moveLeft, onceTime);
    else e.target.addEventListener("click", moveLeft, onceTime);    
  }, 500);
}

//Movimiento a la derecha
const moveRight = (e) => {
  //Identificamos el carrusel seleccionado
  let carrusel;
  if(e.target.nodeName === 'IMG') carrusel = e.target.parentElement.parentElement.nextElementSibling;
  else carrusel = e.target.parentElement.nextElementSibling;
  
  //Identificamos el último elemento
  const img = carrusel.querySelectorAll(".img");
  const imgLast = img[img.length - 1];

  //Aplicamos la animación
  carrusel.style.transition = "transform .5s linear";
  carrusel.style.transform = `translateX(${movePx()})`;
  actualizarEstilos("right", carrusel);

  //Colocamos la útlima imagen en primera posición
  setTimeout(() => {
    carrusel.insertAdjacentElement("afterbegin", imgLast);
    carrusel.style.transition = "none";
    carrusel.style.transform = "translateX(0px)";
    //Volvemos a activar el evento, si no sólo se ejecutaría el evento una vez
    if(e.target.nodeName === 'IMG') e.target.parentElement.addEventListener("click", moveRight, onceTime);
    else e.target.addEventListener("click", moveRight, onceTime);
  }, 500);
}

//Actualiza los estilos
const actualizarEstilos = (direcction, grupImages) => {
  const img = grupImages.querySelectorAll(".img");
  const n =
    direcction === "right"
      ? Math.round(img.length / 2) - 2
      : Math.round(img.length / 2);
  const big = img[n];
  const normal = [img[n - 1], img[n + 1]];
  img.forEach((image) => {
    image.classList.remove("img--big", "img--normal");
  });
  big.classList.add("img--big");
  normal.forEach((image) => {
    image.classList.add("img--normal");
  });
};

//--Eventos--

//Evento a los botones izquierdos
dLeft.addEventListener("click", moveLeft, onceTime);

//Evento a los botones derechos
dRight.addEventListener("click", moveRight, onceTime);

//--Eventos--

//Evento a los botones izquierdos
dLeft.addEventListener("click", moveLeft, onceTime);

//Evento a los botones derechos
dRight.addEventListener("click", moveRight, onceTime);