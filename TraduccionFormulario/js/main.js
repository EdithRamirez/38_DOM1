var titulo = document.getElementById("form-signin-heading");
titulo.innerHTML = "Por favor inicia sesión";

document.getElementById("inputEmail").setAttribute("placeholder","Correo Electrónico");
document.getElementById("inputPassword").setAttribute("placeholder","Contraseña");

var check = document.getElementsByTagName("span")[0];
check.innerHTML = "Recordar datos";

var boton = document.getElementsByTagName("button")[0];
boton.innerHTML = "Iniciar Sesión";



/*otra manera de cambiar los valores

var email = document.getElementById("inputEmail");
email.placeholder = "Correo Electrónico";

var pass = document.getElementById("inputPassword");
pass.placeholder = "Contraseña";

document.getElementsByTagName("span")[0].innerHTML = "Recordar datos";
*/