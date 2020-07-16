/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let primerPrecio;
    let segundoPrecio;
    let TercerPrecio;
    let sumar;

    primerPrecio = parseFloat(document.getElementById("txtIdPrecioUno").value);
    segundoPrecio = parseFloat(document.getElementById("txtIdPrecioDos").value);
    TercerPrecio = parseFloat(document.getElementById("txtIdPrecioTres").value);

    sumar = primerPrecio + segundoPrecio +  TercerPrecio;
    alert("La suma total de los precios es $"+sumar.toFixed(2));
}
function Promedio () 
{
    let primerPrecio;
    let segundoPrecio;
    let TercerPrecio;
    let suma;
    let promedio;

    primerPrecio = parseFloat(document.getElementById("txtIdPrecioUno").value);
    segundoPrecio = parseFloat(document.getElementById("txtIdPrecioDos").value);
    TercerPrecio = parseFloat(document.getElementById("txtIdPrecioTres").value);
    suma = primerPrecio + segundoPrecio + TercerPrecio;
    promedio = suma / 3;

    alert("El promedio de los precios es $"+promedio.toFixed(2));
}
function PrecioFinal () 
{
	let primerPrecio;
    let segundoPrecio;
    let TercerPrecio;
    let suma;
    let iva;
    let PrecioFinal;

    primerPrecio = parseFloat(document.getElementById("txtIdPrecioUno").value);
    segundoPrecio = parseFloat(document.getElementById("txtIdPrecioDos").value);
    TercerPrecio = parseFloat(document.getElementById("txtIdPrecioTres").value);

    suma = primerPrecio + segundoPrecio + TercerPrecio;
    iva = suma * 21 / 100;
    precioFinal = suma + iva;

    alert("El precio mas el iva es $"+precioFinal.toFixed(2));
}