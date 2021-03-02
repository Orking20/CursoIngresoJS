function mostrar()
{
	var nota;
	var sexo;
	var sumaNotas = 0;
	var promedio;
	var notaMinima = 10;
	var sexoNotaMinima;
	var cantVarones = 0;

	for(var i = 1; i <= 5; i++)
	{
		do
		{
			nota = parseInt(prompt("Ingrese la nota " + i + ": "));
		}while(isNaN(nota) || nota < 0 || nota > 10);
		do
		{
			sexo = prompt("Ingrese el sexo (f / m): ");
		}while(sexo != "f" && sexo != "m");

		sumaNotas += nota;
		
		if(nota < notaMinima)
		{
			notaMinima = nota;
			sexoNotaMinima = sexo;
		}
		if(sexo = "m" && nota >= 6)
		{
			cantVarones++;
		}
	}

	promedio = sumaNotas / 5;

	alert("El promedio de las notas totales es: " + promedio);
	alert("La nota más baja es " + notaMinima + " y el sexo de esa persona " + sexoNotaMinima);
	alert("La cantidad de varones con nota igual o mayor a 6 son: " + cantVarones);
}