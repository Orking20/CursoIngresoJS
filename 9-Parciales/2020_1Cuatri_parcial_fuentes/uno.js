function mostrar()
{
	var producto;
	var precio;
	var cantUnidades;
	var marca;
	var fabricante;

	var alcoholPrecioMinimo;
	var cantUnidadesAlcoholMasBarato;
	var fabricanteAlcoholMasBarato;
	var flagPrecioAlcohol = true;

	var acumuladorUnidadesAlcohol = 0;
	var acumuladorUnidadesBarbijo = 0;
	var acumuladorUnidadesJabon = 0;
	var contadorAlcohol = 0;
	var contadorBarbijo = 0;
	var contadorJabon = 0;
	var promedioAlcohol;
	var promedioBarbijo;
	var promedioJabon;

	for(var i = 0; i < 5; i++)
	{
		//Carga y validación de datos
		producto = prompt("Ingrese el producto (barbijo/jabon/alcohol): ");
		while(producto != "barbijo" && producto != "jabon" && producto != "alcohol")
		{
			producto = prompt("Solo puedes ingresar (barbijo/jabon/alcohol). Ingrese nuevamente el producto: ");
		}
		precio = parseInt(prompt("Ingrese el precio (entre 100 y 300): "));
		while(isNaN(precio) || precio < 100 || precio > 300)
		{
			precio = parseInt(prompt("Solo puedes ingresar un número entre 100 y 300. Ingrese nuevamente el precio: "));
		}
		cantUnidades = parseInt(prompt("Ingrese la cantidad de unidades (entre 1 y 1000): "));
		while(isNaN(cantUnidades) || cantUnidades < 1 || cantUnidades > 1000)
		{
			cantUnidades = parseInt(prompt("Solo puedes ingresar un número entre 1 y 1000. Ingrese nuevamente las cantidades: "));
		}
		marca = prompt("Ingrese la marca: ");
		while(!isNaN(marca))
		{
			marca = prompt("No puedes ingresar números. Ingrese nuevamente la marca: ");
		}
		fabricante = prompt("Ingrese el fabricante: ");
		while(!isNaN(fabricante))
		{
			fabricante = prompt("No puedes ingresar números. Ingrese nuevamente el fabricante: ");
		}

		if(flagPrecioAlcohol && producto == "alcohol" || precio < alcoholPrecioMinimo)
		{
			alcoholPrecioMinimo = precio;
			cantUnidadesAlcoholMasBarato = cantUnidades;
			fabricanteAlcoholMasBarato = fabricante;
			flagPrecioAlcohol = false;
		}

		switch(producto)
		{
			case "alcohol":
			{
				acumuladorUnidadesAlcohol += cantUnidades;
				contadorAlcohol++;
				break;
			}
			case "barbijo":
			{
				acumuladorUnidadesBarbijo += cantUnidades;
				contadorBarbijo++;
				break;
			}
			case "jabon":
			{
				acumuladorUnidadesJabon += cantUnidades;
				contadorJabon;
				break;
			}
		}
	}//Fin del for

	if(contadorAlcohol > 0)
	{
		promedioAlcohol = acumuladorUnidadesAlcohol / contadorAlcohol;
	}
	else
	{
		promedioAlcohol = 0;
	}
	if(contadorBarbijo > 0)
	{
		promedioBarbijo = acumuladorUnidadesBarbijo / contadorBarbijo;
	}
	else
	{
		promedioBarbijo = 0;
	}
	if(contadorJabon > 0)
	{
		promedioJabon = acumuladorUnidadesJabon / contadorJabon;
	}
	else
	{
		promedioJabon = 0;
	}

	//Muestra de datos
	if(acumuladorUnidadesAlcohol > acumuladorUnidadesBarbijo && acumuladorUnidadesAlcohol > acumuladorUnidadesJabon)
	{
		document.write("<br>Promedio de unidades del alcohol: " + promedioAlcohol);
	}
	else if(acumuladorUnidadesBarbijo > acumuladorUnidadesAlcohol && acumuladorUnidadesBarbijo > acumuladorUnidadesJabon)
	{
		document.write("<br>Promedio de unidades del barbijo: " + promedioBarbijo);
	}
	else
	{
		document.write("<br>Promedio de unidades del jabón: " + promedioJabon);
	}

	if(cantUnidadesAlcoholMasBarato != null)
	{
		document.write("<br>La cantidad de unidades del alcohol más barato es " + cantUnidadesAlcoholMasBarato + " y el fabricante es " + fabricanteAlcoholMasBarato)
	}
	else
	{
		document.write("<br>No hay unidades de alcohol");
	}
	
	document.write("<br>Unidades de jabón en total: " + acumuladorUnidadesJabon);
}