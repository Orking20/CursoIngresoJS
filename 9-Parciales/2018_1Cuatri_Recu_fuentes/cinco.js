function mostrar()
{
	var dia;

	dia = prompt("Ingrese un día de la semana: ");

	switch(dia)
	{
		case "lunes":
		case "martes":
		case "miercoles":
		case "jueves":
		case "viernes":
		{
			alert("A trabajar");
			break;
		}
		case "sabado":
		case "domingo":
		{
			alert("Buen finde");
			break;
		}
		default:
		{
			alert(dia + " no es un día válido");
		}
	}
}