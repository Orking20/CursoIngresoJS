function mostrar()
{
	var edad = document.getElementById("txtIdEdad").value;
	var estCivil = document.getElementById("estadoCivil").value;

	edad = parseInt(edad);

	if (edad < 18 && estCivil != "Soltero")
	{
		alert("Es muy pequeño para NO ser soltero");
	}
}//FIN DE LA FUNCIÓN