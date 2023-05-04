//declaro las variables del button, p, y background 
let cambiador = document.getElementById("cambiador");
let color = document.getElementById("color");
let fondo = document.getElementById("fondo");
let radioSimple = document.getElementById("radio-simple")
let radioHex = document.getElementById("radio-hex")
let radioRgb = document.getElementById("radio-rgb")
let seleccionado = null

//funcion para generar colores prederterminados
function colorSimple(){
   

    const simpleArray = ["Red","Blue","Black", "Yellow","Green","Purple", "Gray","Orange"];
    //genero un numero aleatorio hasta el 7 que despues servira para posicionarse dentro del Array cada vez que se llame a la funcion
    let seleccionador = Math.round(Math.random()*7);
    let colorAleatorio = simpleArray[seleccionador];
    //se cambia el color del background con el color aleatorio generado
    fondo.style.background = colorAleatorio;
    color.innerHTML = colorAleatorio;
    //condicional para que cuado el color sea amarillo, naranja o verde las letras del boton sean negras
    if (colorAleatorio === simpleArray[3] || colorAleatorio === simpleArray[7]||colorAleatorio === simpleArray[4]){
        cambiador.style.color = "black";
        
    }
    else{
        cambiador.style.color = "white";
    }
}

//funcion para generar un color hexadecimal
function colorHex(){

    const hexArray = ["A","B","C","D","E","F","0","1","2","3","4","5","6","7","8","9"];
    let randomHexArray = ["#"]
    //se hacen 6 iteraciones para seleccionar 6 elementos de la matriz y crear una nueva matriz con los elementos seleccionados 
    for (let i = 0; i < 6; i++) {
        let seleccionadorHex =  hexArray[Math.round(Math.random()*15)];
        let randomHex =  seleccionadorHex;
        randomHexArray.push(randomHex)
        
    }
   fondo.style.background = randomHexArray.join("")
   color.innerHTML = randomHexArray.join("")
    
}

function colorRgb (){
    const rgbArray = []
    
    for (let i = 0; i < 3; i++) {
        
        const valorRgb = Math.round(Math.random()*255)
        rgbArray.push(valorRgb)

    }
    let randomRgb = "rgb("+ rgbArray.join(", ") +")"
    fondo.style.background = randomRgb
    color.innerHTML = randomRgb
    

}

radioSimple.addEventListener("click", function() {
    seleccionado = "simple"
  })
  
  radioHex.addEventListener("click", function() {
    seleccionado = "hex"
  })
  
  radioRgb.addEventListener("click", function() {
    seleccionado = "rgb"
  })
  
  cambiador.addEventListener("click", function() {
    if (seleccionado === "simple") {
      colorSimple()
    } else if (seleccionado === "hex") {
      colorHex()
    } else if (seleccionado === "rgb") {
      colorRgb()
    }
    else {
        alert("Debes seleccionar un modo")
    }
  })
  
  
 