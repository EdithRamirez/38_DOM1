function validateForm(){
	/* Escribe tú código aquí */
	var nombre = document.getElementById("name").value;
	if (nombre == null ||  nombre == "") {
		alert("Tiene que escribir su nombre");
		return false;
	}
	else if(!/^[A-Z][a-z]*$/g.test(nombre)){
		alert("La primera letra debe ser mayúscula");
		return false;
	}

	var apellido = document.getElementById("lastname").value;
	if (apellido == null || apellido == "") {
		alert("Tiene que escribir su apellido");
		return false;
	}
	else if(!/^[A-Z][a-z]*$/g.test(apellido)){
		alert("La primera letra debe ser mayúscula");
		return false;
	}

	var correo = document.getElementById("input-email").value;
	if (correo == null || correo == "") {
		alert("Tiene que escribir su correo");
		return false;
	}
	else if (!(/\S+@\S+\.\S+/.test(correo))){
		alert("Escribe un correo válido");
		return false;
	}
	var contrasena = document.getElementById("input-password").value;
	if (contrasena == null || contrasena == "") {
		alert("Tiene que escribir su contraseña");
		return false;
	} else if (contrasena.length < 6) {
		alert("La contraseña debe tener al menos 6 caracteres");
		return false;
	} else if (contrasena == "password" || contrasena == "123456" || contrasena == "098754"){
		alert("No se puede utilizar esa contraseña");
		return false;
	}

	var tipoBici = document.getElementsByTagName("select")[0].selectedIndex;
	if( tipoBici == null || tipoBici == 0 ) {
		alert("Debe seleccionar una opción de la lista");
		return false;
	}
}
