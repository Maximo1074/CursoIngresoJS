/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombre;
	let edad;

	//obtengo el nombre y la edqad de las cajas de texto a travez de la id y los guardo en las variables correspondientes
	nombre = document.getElementById("txtIdNombre").value; 
	edad = document.getElementById("txtIdEdad").value;

	alert("usted se llama "+nombre +" y tiene "+edad +" años");
}

