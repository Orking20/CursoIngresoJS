function mostrar()
{
	var precio;
	var descuento;
	var precioDescontar;
	var precioFinal;

	precio = parseInt(prompt("Ingrese el precio: "));
	descuento = parseInt(prompt("Ingrese el descuento: "));

	precioDescontar = precio * descuento / 100;
	precioFinal = precio - precioDescontar;

	document.getElementById("elPrecioFinal").value = precioFinal;
}