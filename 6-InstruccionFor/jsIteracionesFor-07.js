function mostrar()
{
	let numero;
	let cont;
	let cantDivisores;

	numero = prompt("Ingrese un número.");

	for (cont = 0; cont <= numero; cont++)
	{
		if (numero % cont == 0)
		{
			alert(cont);
			cantDivisores++;
		}
	}
}//FIN DE LA FUNCIÓN