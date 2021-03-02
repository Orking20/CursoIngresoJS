function mostrar()
{
	var numero1;
	var numero2;
	var suma;

	numero1 = parseInt(prompt("Ingrese un número: "));
	numero2 = parseInt(prompt("Ingrese otro número: "));

	if(numero1 == numero2)
	{
		alert(numero1 + "" + numero2);
	}
	else if(numero1 > numero2)
	{
		alert(numero1 / numero2);
	}
	else
	{
		suma = numero1 + numero2;
		if(suma < 50)
		{
			alert("La suma es " + suma + " y es menor a 50");
		}
		else
		{
			alert(suma);
		}
	}
}