function mostrar()
{
	let numeroRamdom;

	numeroRamdom = Math.floor(Math.random() * 10) + 1; 

	if(numeroRamdom >= 9){
		alert(numeroRamdom+" Excelente");
	}else
		if(numeroRamdom >= 4 && numeroRamdom <= 8){
			alert(numeroRamdom+" Aprobo");
		}else
			if(numeroRamdom < 4){
				alert(numeroRamdom +" Vamos, la proxima se puede");
			}


}//FIN DE LA FUNCIÓN