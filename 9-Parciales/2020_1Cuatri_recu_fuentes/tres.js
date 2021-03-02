function mostrar()
{
	var nombre;
	var nacionalidad;
	var edad;
	var sexo;
	var estadoCivil;
	var temperaturaCorporal;

	var temperaturaMax = 0;
	var nacionalidadTempMax;

	var solterosMayores = 0;

	var mujeresNoCasadas = 0;

	var terceraEdadTempElevada = 0;

	var sumaEdades = 0;
	var divisorEdades = 0;
	var promedio;

	var continuar;

	do
	{
		do
		{
			nombre = prompt("Ingresar nombre: ");
		}while(!isNaN(nombre));
		do
		{
			nacionalidad = prompt("Ingresar nacionalidad: ");
		}while(!isNaN(nacionalidad));
		do
		{
			edad = parseInt(prompt("Ingresar edad: "));
		}while(isNaN(edad) || edad < 1 || edad > 110);
		do
		{
			sexo = prompt("Ingresar sexo (m / f): ");
		}while(sexo != "m" && sexo != "f");
		do
		{
			estadoCivil = prompt("Ingresar estadoCivil (soltero / casado / viudo): ");
		}while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo");
		do
		{
			temperaturaCorporal = parseInt(prompt("Ingresar temperaturaCorporal: "));
		}while(isNaN(temperaturaCorporal));
		

		if(temperaturaCorporal > temperaturaMax)
		{
			temperaturaMax = temperaturaCorporal;
			nacionalidadTempMax = nacionalidad;
		}

		if(edad > 17 && estadoCivil == "soltero")
		{
			solterosMayores++;
		}

		if(sexo == "f" && estadoCivil != "casado")
		{
			mujeresNoCasadas++;
		}
		else if(sexo == "f" && estadoCivil == "casado")
		{
			sumaEdades += edad;
			divisorEdades++;
		}

		if(edad > 60 && temperaturaCorporal > 38)
		{
			terceraEdadTempElevada++;
		}

		continuar = confirm("¿Desea ingresar otra persona?");
	}while(continuar == true);

	promedio = sumaEdades / divisorEdades;

	document.write("La nacionalidad de la persona con mayor temperatura es: " + nacionalidadTempMax + "<br>");
	document.write("Mayores de edad que están solteros: " + solterosMayores + "<br>");
	document.write("Cantidad de mujeres solteras o viudas: " + mujeresNoCasadas + "<br>");
	document.write("Cantidad de personas de la tercera edad con mayor temperatura a 38 grados: " + terceraEdadTempElevada + "<br>");
	document.write("El promedio de edad entre las mujeres casadas es: " + promedio + "<br>");
}