function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var temperaturaCorporal;
	var continuar;

	var temperaturaMaxima;
	var nombreTempMaxima;
	var flagTemp = true;

	var contMayoresViudos = 0;

	var cantHombresSolterosViudos = 0;

	var cantViejosTempAltas = 0;

	var acumuladorEdadHombresSolteros = 0;
	var contEdadHombresSolteros = 0;
	var promedio;

	do
	{
		nombre = prompt("Ingrese el nombre: ");
		while(!isNaN(nombre))
		{
			nombre = prompt("No puede ingresar números. Ingrese el nombre nuevamente: ");
		}
		edad = parseInt(prompt("Ingrese la edad: "));
		while(isNaN(edad))
		{
			edad = parseInt(prompt("Solo puede ingresar números. Ingrese la edad nuevamente: "));
		}
		sexo = prompt("Ingrese el sexo (f/m): ");
		while(sexo != "f" && sexo != "m")
		{
			sexo = prompt("Solo puede ingresar (f/m). Ingrese el sexo nuevamente: ");
		}
		estadoCivil = prompt("Ingrese el estadoCivil (soltero/casado/viudo): ");
		while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo")
		{
			estadoCivil = prompt("Solo puede ingresar (soltero/casado/viudo). Ingrese el estadoCivil nuevamente: ");
		}
		temperaturaCorporal = prompt("Ingrese la temperatura corporal: ");
		while(isNaN(temperaturaCorporal))
		{
			temperaturaCorporal = prompt("Solo puedes ingresar números. Ingrese la temperatura corporal nuevamente: ");
		}

		switch(estadoCivil)
		{
			case "viudo":
			{
				if(edad > 17)
				{
					contMayoresViudos++;
				}
				if(sexo == "m")
				{
					cantHombresSolterosViudos++;
				}
				break;
			}
			case "soltero":
			{
				if(sexo == "m")
				{
					cantHombresSolterosViudos++;
					acumuladorEdadHombresSolteros += edad;
					contEdadHombresSolteros++;
				}
				break;
			}
		}

		if(edad > 60 && temperaturaCorporal > 38)
		{
			cantViejosTempAltas++;
		}

		if(flagTemp == true || temperaturaCorporal > temperaturaMaxima)
		{
			temperaturaMaxima = temperaturaCorporal;
			nombreTempMaxima = nombre;
		}

		continuar = confirm("¿Desea continuar?");
	}while(continuar)

	if(contEdadHombresSolteros > 0)
	{
		promedio = acumuladorEdadHombresSolteros / contEdadHombresSolteros;
	}
	else
	{
		promedio = 0;
	}

	document.write("<br>Persona con más temperatura: " + nombreTempMaxima);
	document.write("<br>Mayores de edad viudos: " + contMayoresViudos);
	document.write("<br>Cantidad de hombres viudos o solteros: " + cantHombresSolterosViudos);
	document.write("<br>Cantidad de personas de la tercera edad con temperaturas altas: " + cantViejosTempAltas);
	document.write("<br>Promedio de edad entre los hombres: " + promedio);
}