function mostrar()
{
	var ancho;
	var largo;
	var perimetro;

	ancho = parseInt(prompt("Ingrese el ancho del rectángulo"));
	largo = parseInt(prompt("Ingrese el largo del rectángulo"));

	perimetro = (ancho * 2) + (largo * 2);
	alert("El perímetro del rectángulo es: " + perimetro);
}