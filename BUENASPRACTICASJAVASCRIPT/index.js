parrafoInicial = document.getElementById("parrafoinicial")

console.log(parrafoInicial)

parrafoInicial.onclick = function() {
    accion()
}

function accion() {

    const colores = [
        "red",
        "blue",
        "black",
        "cyan"
    ]

    parrafoInicial.style.color = colores[Math.random()]
}





/*
TIPOS DE DATOS
var -> Modificarse, scope global - NO SE RECOMIENDA 
let -> Modificable, scope limitado - RECOMENDADA (Em cuanto se deja de usar muere y nos da mayor espacio de memoria)
const -> CONSTANTE, no modificable - Scopew global  
*/

/*

CASES

PascalCase - Nombres de clases - JAVA

camelCase - variables, funciones, atributos - JavaScript
    variable -> parrafoInicial =
    funcion -> parrafoInicial()
    atributo -> parrafoInicial

snake_case - Python , JavaScript
    variables y funciones 

CASE - Constantes

*/
