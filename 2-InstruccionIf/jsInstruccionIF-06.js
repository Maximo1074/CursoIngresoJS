function mostrar()
{
	let edad;
	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad >= 13 && edad <= 17){
		alert("Sos un adolescente");
	}
	else
		if(edad < 13){
		alert("Sos un niño/a");
		}
		else{
			alert("Sos mayor de edad");
		}
	
		
}//FIN DE LA FUNCIÓN