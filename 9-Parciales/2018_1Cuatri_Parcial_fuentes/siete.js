function mostrar()
{
	var nota;
	var sexo;
	var sumaNotas = 0;
	var promedio;
	var contador = 1;
	var notaMinima;
	var sexoNotaMinima;
	var cantVarones = 0;

	for(var i = 0; i < 5; i++)
	{
		do
		{
			nota = parseInt(prompt("Ingrese una nota (del 0 al 10): "));
		}while(isNaN(nota) || nota < 0 || nota > 10);
		do
		{
			sexo = prompt("Ingrese el sexo (f / m): ");
		}while(sexo != "f" && sexo != "m");

		if(contador == 1)
		{
			notaMinima = nota;

			contador--;
		}

		if(nota <= notaMinima)
		{
			notaMinima = nota;
			sexoNotaMinima = sexo;
		}

		if(sexo == "m")
		{
			if(nota >= 6)
			{
				cantVarones++;
			}
		}

		sumaNotas += nota;
	}

	promedio = sumaNotas / 5;

	alert("Promedio de las notas totales: " + promedio);
	alert("La nota más baja es " + notaMinima + " del sexo " + sexoNotaMinima);
	alert("Cantidad de varones con nota mayor o igual a 6: " + cantVarones);
}