function mostrar()
{
	var letra;
	var numero;
	var pares = 0;
	var impares = 0;
	var cantCeros = 0;
	var sumaPositivos = 0;
	var cantNumerosPositivos = 0;
	var promedio;
	var sumaNegativos = 0;
	var numMaximo;
	var numMinimo;
	var letraMaxima;
	var letraMinima;
	var contador = 1;
	var continuar;

	do
	{
		do
		{
			letra = prompt("Ingrese una letra: ");
		}while(!isNaN(letra));
		do
		{
			numero = parseInt(prompt("Ingrese un número (entre -100 y 100): "));
		}while(isNaN(numero) || numero < -100 || numero > 100);

		if(contador == 1)
		{
			numMaximo = numero;
			numMinimo = numero;

			contador--;
		}

		if(numero % 2 == 0)
		{
			pares++;
		}
		else if(numero % 2 != 0)
		{
			impares++;
		}

		if(numero == 0)
		{
			cantCeros++;
		}
		else if(numero > 0)
		{
			sumaPositivos += numero;
			cantNumerosPositivos++;
		}
		else if(numero < 0)
		{
			sumaNegativos += numero;
		}

		if(numero > numMaximo)
		{
			numMaximo = numero;
			letraMaxima = letra;
		}
		else if(numero < numMinimo)
		{
			numMinimo = numero;
			letraMinima = letra;
		}

		continuar = confirm("¿Desea continuar?");
	}while(continuar == true);

	promedio = sumaPositivos / cantNumerosPositivos;

	document.write("Cantidad de números pares: " + pares + "<br>");
	document.write("Cantidad de números impares: " + impares + "<br>");
	document.write("Cantidad de ceros: " + cantCeros + "<br>");
	document.write("Promedio de números positivos: " + promedio + "<br>");
	document.write("Suma de números negativos: " + sumaNegativos + "<br>");
	document.write("Número y letra máxima: " + numMaximo + " " + letraMaxima + "<br>");
	document.write("Número y letra mínima: " + numMinimo + " " + letraMinima + "<br>");
}