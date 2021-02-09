function mostrar()
{
	var edad = document.getElementById("txtIdEdad").value;

	edad = parseInt(edad);

	if (edad >= 18)
	{
		alert("Eres mayor de edad");
	}
}//FIN DE LA FUNCIÓN