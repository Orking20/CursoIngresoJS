function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;

	contador = 0;
	acumulador = 0;
	
	numeroIngresado = prompt("Ingrese un número");
	numeroIngresado = parseInt(numeroIngresado);
	acumulador += numeroIngresado;

	while (contador != 4)
	{
		numeroIngresado = prompt("Ingrese otro número");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador += numeroIngresado;
		contador ++;
	}
	
	txtIdSuma.value = acumulador;
	txtIdPromedio.value = acumulador / 5;
}//FIN DE LA FUNCIÓN