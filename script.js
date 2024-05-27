var nombre=prompt("Ingrese su nombre");

if (nombre!=""){
    saludo(nombre);
} else{
  var nombre=prompt("Ingrese su nombre por favor");
  }

function saludo(nombre){
    alert("Bienvenido "+ nombre)
}