// Declaración de variables globales:
var botonEncriptar = document.querySelector('#boton-encriptar');
var botonDesencriptar = document.querySelector('#boton-desencriptar');
var botonCopiar = document.querySelector('#boton-copy');
var botonReiniciar = document.querySelector('#boton-reset');

var entradaTexto = document.querySelector('#form');
var salidaTexto = document.querySelector('#message');
var textoValido = false;

// Declaración de funciones:

// Capturar texto ingresado:
function capturarTexto() {
    textoIngresado = entradaTexto.value;
    if(textoIngresado === '') {
        alert('El campo está vacío');
    } else {
        validarTexto();
    }
};

// Validar texto ingresado:
function validarTexto() {
    var restriccion = new RegExp(/^[a-z ]*$/); 
    if(!restriccion.test(textoIngresado)) {
        textoValido = false;    
        alert('Sólo letras minúsculas. No se permiten acentos ni caracteres especiales');
        reiniciar();
        entradaTexto.focus();
    } else {
        textoValido = true;
    }   
};

// Encriptar texto:
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras
No caracteres especiales */

function encriptar() {
    if(textoValido) {
        var textoIngresado = entradaTexto.value;
        var textoNuevo = textoIngresado
            .replaceAll("e", "enter")
            .replaceAll("i", "imes")
            .replaceAll("a", "ai")
            .replaceAll("o", "ober")
            .replaceAll("u", "ufat");
        var titulo = document.querySelector("h2");
        titulo.textContent="Mensaje encriptado:";
        console.log(textoNuevo);
        return salidaTexto.value = textoNuevo;
    }
};

// Desencriptar texto:
/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras
No caracteres especiales */ 

function desencriptar() {
    if (textoValido) {
        var textoIngresado = entradaTexto.value;
        var textoNuevo = textoIngresado
            .replaceAll("enter", "e")
            .replaceAll("imes", "i")
            .replaceAll("ai", "a")
            .replaceAll("ober", "o")
            .replaceAll("ufat", "u");
        var titulo = document.querySelector("h2");
        titulo.textContent="Mensaje desencriptado:";
        console.log(textoNuevo);
        return salidaTexto.value = textoNuevo;
    }
};

// Copiar texto:
function copiar() {
    if(salidaTexto.value === "") {
        alert('El campo está vacío');
    } else {
        var titulo = document.querySelector("h2");
        titulo.textContent="Mensaje copiado:";
        textoNuevo = salidaTexto.value;
        navigator.clipboard.writeText(textoNuevo);
        salidaTexto.select();
    }
};

// Reinciar:
function reiniciar() {
    location.reload();
};

// Botones:
botonEncriptar.addEventListener("click",function(event) {
    event.preventDefault();
    capturarTexto();
    encriptar();
});

botonDesencriptar.addEventListener("click",function(event) {
    event.preventDefault();
    capturarTexto();
    desencriptar();
});

botonCopiar.addEventListener("click",function(event) {
    event.preventDefault();
    copiar();
});

botonReiniciar.addEventListener("click",function(event) {
    event.preventDefault();
    reiniciar();
});