/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largoTerreno;
    let anchoTerreno;
    let perimetro;
    let alambre;

    largoTerreno = parseInt(document.getElementById("txtIdLargo").value);
    anchoTerreno = parseInt(document.getElementById("txtIdAncho").value);

    perimetro = (largoTerreno + anchoTerreno) * 2;

    alambre = perimetro * 3;

    alert("Se necesitan "+alambre +" metros de alambre");
}
function Circulo () 
{
    let radioTerreno;
    let perimetro;
    let alambre;
    const PI = 3.14;

    radioTerreno = parseInt(document.getElementById("txtIdRadio").value);

    perimetro = 2 * radioTerreno * PI;

    alambre = perimetro * 3;

    alert("Se necesitan "+alambre +" metros de alambre");
}
function Materiales () 
{
	let largoTerreno;
    let anchoTerreno;
    let area;
    let cal;
    let cemento;

    largoTerreno = parseInt(document.getElementById("txtIdLargo").value);
    anchoTerreno = parseInt(document.getElementById("txtIdAncho").value);
    
    area = largoTerreno * anchoTerreno;
    cal = area * 3;
    cemento = area * 2;

    alert("Se necesitan "+cal +" bolsas de cal y "+cemento +" bolsas de cemento");
}