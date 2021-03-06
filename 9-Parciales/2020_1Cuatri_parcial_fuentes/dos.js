function mostrar()
{
	var producto;
	var cantBolsas;
	var precioPorBolsa;
	var continuar;

	var descuento;

	var precioPorBolsa;
	var acumuladorBolsas = 0;
	var acumuladorPrecioBolsa = 0;
	var acumuladorImporteTotal = 0;
	var precioDescuento;
	var porcentajeDescontar;

	var acumuladorBolsasArena = 0;
	var acumuladorBolsasCal = 0;
	var acumuladorBolsasCemento = 0;

	var precioMaximo;
	var tipoMasCaro;
	var flagPrecio = true;

	do
	{
		producto = prompt("Ingrese el producto (arena/cal/cemento): ");
		while(producto != "arena" && producto != "cal" && producto != "cemento")
		{
			producto = prompt("Solo puedes ingresar (arena/cal/cemento). Ingrese nuevamente el producto: ");
		}
		cantBolsas = parseInt(prompt("Ingrese la cantidad de bolsas: "));
		while(isNaN(cantBolsas))
		{
			cantBolsas = parseInt(prompt("Solo puedes ingresar números. Ingrese nuevamente la cantidad de bolsas: "));
		}
		precioPorBolsa = parseInt(prompt("Ingrese el precio por bolsa (mayor a 0): "));
		while(isNaN(precioPorBolsa) || precioPorBolsa < 0)
		{
			precioPorBolsa = parseInt(prompt("Solo puedes ingresar números mayores a 0. Ingrese nuevamente el precio por bolsa: "));
		}

		switch(producto)
		{
			case "arena":
			{
				acumuladorBolsasArena += cantBolsas;
				break;
			}
			case "cal":
			{
				acumuladorBolsasCal += cantBolsas;
				break;
			}
			case "cemento":
			{
				acumuladorBolsasCemento += cantBolsas;
				break;
			}
		}

		if(flagPrecio == true || precioPorBolsa > precioMaximo)
		{
			precioMaximo = precioPorBolsa;
			tipoMasCaro = producto;
			flagPrecio = false;
		}

		acumuladorBolsas += cantBolsas;
		acumuladorPrecioBolsa += precioPorBolsa;

		continuar = confirm("¿Desea continuar?");
	}while(continuar == true);

	if(acumuladorBolsas > 30)
	{
		descuento = 25;
	}
	else if(acumuladorBolsas > 10)
	{
		descuento = 15;
	}

	acumuladorImporteTotal = acumuladorBolsas * acumuladorPrecioBolsa;
	porcentajeDescontar = acumuladorImporteTotal * descuento / 100;
	precioDescuento = acumuladorImporteTotal - porcentajeDescontar;

	if(descuento == null)
	{
		document.write("<br>El importe total sin descuento es: " + acumuladorImporteTotal);
	}
	else
	{
		document.write("<br>El importe total con descuento es: " + precioDescuento);
	}

	if(acumuladorBolsasArena > acumuladorBolsasCal && acumuladorBolsasArena > acumuladorBolsasCemento)
	{
		document.write("<br>El tipo con más cantidad de bolsas es arena");
	}
	else if(acumuladorBolsasCal > acumuladorBolsasArena && acumuladorBolsasCal > acumuladorBolsasCemento)
	{
		document.write("<br>El tipo con más cantidad de bolsas es cal");
	}
	else
	{
		document.write("<br>El tipo con más cantidad de bolsas es cemento");
	}
	document.write("<br>El tipo más caro es: " + tipoMasCaro);
}