function validateForm(){
	/* Escribe tú código aquí */
	var nombre = document.getElementById("name").value;
	if(nombre == null || nombre == ""){
		alert("Ingresa tu nombre");
		return false;
	}
	// 	var apellido = document.getElementById("lastname").value;
	// if(apellido == null || apellido == ""){
	// 	alert("Ingresa tu nombre");
	// 	return false;
	// }
}