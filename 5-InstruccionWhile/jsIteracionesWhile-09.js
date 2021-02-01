/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let banderaDelPrimero;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;

	//iniciar variables
	banderaDelPrimero = "es el primero";
	respuesta = 'si';

	numeroIngresado = prompt("Ingrese un número.");
	numeroMinimo = numeroIngresado;
	numeroMaximo = numeroIngresado;

	while (respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un número.");
		if (numeroIngresado < numeroMinimo)
		{
			numeroMinimo = numeroIngresado;
		}
		else if (numeroIngresado > numeroMaximo)
		{
			numeroMaximo = numeroIngresado;
		}

		respuesta = prompt("Desea continuar?", "si");
	}

	txtIdMaximo.value = numeroMaximo;
	txtIdMinimo.value = numeroMinimo;
}//FIN DE LA FUNCIÓN