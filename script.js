//declaro las variables del button, p, y background 
let cambiador = document.getElementById("cambiador");
let color = document.getElementById("color");
let fondo = document.getElementById("fondo");
let fondoHex = document.getElementById("fondoHex");

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
   fondoHex.style.background = randomHexArray.join("")
   color.innerHTML = randomHexArray.join("")
    
}
