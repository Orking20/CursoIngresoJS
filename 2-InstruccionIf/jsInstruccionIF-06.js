function mostrar()
{
	//tomo la edad  
	if (txtIdEdad.value >= 18)
	{
		alert("Eres mayor de edad");
	}
	else if (txtIdEdad.value >= 13 && txtIdEdad.value <= 17)
	{
		alert("Eres adolescente");
	}
	else
	{
		alert("Eres niño/a");
	}



}//FIN DE LA FUNCIÓN