/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre = prompt("Ingrese su nombre", "Nombre");
	var edad = prompt("Ingrese su edad", "Edad");

	txtIdNombre.value = "Usted se llama " + nombre;
	txtIdEdad.value = "y tiene " + edad + " años";
}

