function mostrar()
{//tomo la edad  
	let edad;
	
	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad >= 18){
		alert("Sos mayor de edad");
	}else
		if(edad < 18){
			alert("sos menor de edad")
		}
		
	

}//FIN DE LA FUNCIÓN