function validateForm(){
	var errores = true;

	var regexNombre = /^[A-Z][a-z]*$/g;
	var nombre = document.getElementById("name").value;
	
	var regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	var correo = document.getElementById("input-email").value;
	
	var mensaje = " ";
	//negar 
	if(!regexEmail.test(correo)){
		mensaje += "El correo es incorrecto\n";
		errores = false;
	}
	if(!regexNombre.test(nombre)){
		mensaje += "Esta incorrecto el nombre\n";
		errores = false;
	}
	if(!errores){
		alert(mensaje)
	}
	return errores;
}