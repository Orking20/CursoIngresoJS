function mostrar()
{
	var letra;
	var numero;
	var pares = 0;
	var impares = 0;
	var ceros = 0;
	var numerosPositivos = 0;
	var cantNumeros = 0;
	var promedio;
	var numerosNegativos = 0;
	var numeroMinimo = 100;
	var numeroMaximo = 0;
	var letraMinimo;
	var letraMaximo;
	var continuar;

	do
	{
		do
		{
			letra = prompt("Ingrese una letra: ");
		}while(!isNaN(letra));
		do
		{
			numero = parseInt(prompt("Ingrese un número: "));
		}while(isNaN(numero) || numero <= -100 || numero >= 100);
		
		if(numero == 0)
		{
			ceros++;
		}

		if(numero % 2 == 0)
		{
			pares++;
		}
		else
		{
			impares++;
		}

		if(numero > 0)
		{
			numerosPositivos += numero;
			cantNumeros++;
		}
		else if(numero < 0)
		{
			numerosNegativos += numero;
		}

		if(numero > numeroMaximo)
		{
			numeroMaximo = numero;
			letraMaximo = letra;
		}
		if(numero < numeroMinimo)
		{
			numeroMinimo = numero;
			letraMinimo = letra;
		}

		continuar = confirm("¿Desea continuar?");
	}while(continuar == true);

	promedio = numerosPositivos / cantNumeros;

	document.write("Cantidad de números pares: " + pares + "<br>");
	document.write("Cantidad de números impares: " + impares + "<br>");
	document.write("Cantidad de ceros: " + ceros + "<br>");
	document.write("Promedio de todos los números positivos: " + promedio + "<br>");
	document.write("Suma de todos los números negativos: " + numerosNegativos + "<br>");
	document.write("Número máximo: " + numeroMaximo + "<br>");
	document.write("Letra de número máximo: " + letraMaximo + "<br>");
	document.write("Número mínimo: " + numeroMinimo + "<br>");
	document.write("Letra de número mínimo: " + letraMinimo + "<br>");
}