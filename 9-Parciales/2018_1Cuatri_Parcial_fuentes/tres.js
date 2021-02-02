function mostrar()
{
	let precio;
	let descuento;
	let precioFinal;

	precio = prompt("Ingrese el precio.");
	descuento = prompt("Ingrese el descuento.");

	descuento = (precio * descuento) / 100;
	precioFinal = precio - descuento;

	document.getElementById("elPrecioFinal").value = precioFinal;
}