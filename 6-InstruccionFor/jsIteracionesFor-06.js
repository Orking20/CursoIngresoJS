function mostrar()
{
	var contador;
	var numero;

	numero = prompt("Ingrese un número.");

	for (contador = 2; contador <= numero; contador += 2)
	{
		alert(contador);
	}
}//FIN DE LA FUNCIÓN