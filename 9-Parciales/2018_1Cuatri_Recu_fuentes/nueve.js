function mostrar()
{
	var animal;
	var peso;
	var temperaturaHabitat;
	var tempPares = 0;
	var animalMasPesado = 0;
	var nombreMasPesado;
	var tempMasPesado = 0;
	var animalesTempNegativa = 0;
	var sumaPeso = 0;
	var cantAnimales = 0;
	var promedio;
	var pesoMax = 0;
	var pesoMin = 1000;
	var continuar;

	do
	{
		do
		{
			animal = prompt("Ingrese un animal de zoológico: ");
		}while(!isNaN(animal));
		do
		{
			peso = parseInt(prompt("Ingrese el peso del animal (entre 1 y 1000): "));
		}while(isNaN(peso) || peso < 1 || peso > 1000);
		do
		{
			temperaturaHabitat = parseInt(prompt("Ingrese la temperatura del hábitat (entre -30 y 30): "));
		}while(isNaN(temperaturaHabitat) || temperaturaHabitat < -30 || temperaturaHabitat > 30);

		if(temperaturaHabitat % 2 == 0)
		{
			tempPares++;
		}

		if(peso > animalMasPesado)
		{
			animalMasPesado = peso;
			nombreMasPesado = animal;
			tempMasPesado = temperaturaHabitat;
		}

		if(temperaturaHabitat < 0)
		{
			animalesTempNegativa++;
		}

		if(temperaturaHabitat < 0)
		{
			if(peso > pesoMax)
			{
				pesoMax = peso;
			}
			else if(peso < pesoMin)
			{
				pesoMin = peso;
			}
		}

		sumaPeso += peso;
		cantAnimales++;

		continuar = confirm("¿Desea continuar?");
	}while(continuar == true);

	promedio = sumaPeso / cantAnimales;

	document.write("Cantidad de temperaturas pares: " + tempPares + "<br>");
	document.write("Nombre del animal más pesado: " + nombreMasPesado + "<br>");
	document.write("Temperatura del animal más pesado: " + tempMasPesado + "<br>");
	document.write("Cantidad de animales que viven con temperaturas menores a 0 grados: " + animalesTempNegativa + "<br>");
	document.write("Promedio de peso de todos los animales: " + promedio + "<br>");
	document.write("Peso máximo del animal cuyas temperaturas sean bajo 0: " + pesoMax + "<br>");
	document.write("Peso mínimo del animal cuyas temperaturas sean bajo 0: " + pesoMin + "<br>");
}