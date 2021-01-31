function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numRandom;
	numRandom = Math.round(Math.random() * 9 + 1);

	if (numRandom >= 9)
	{
		alert("EXCELENTE");
	}
	else if (numRandom > 4)
	{
		alert("APROBÓ");
	}
	else
	{
		alert("Vamos, la próxima se puede");
	}

}//FIN DE LA FUNCIÓN