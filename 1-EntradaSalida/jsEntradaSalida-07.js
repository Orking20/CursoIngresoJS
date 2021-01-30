/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/



function sumar()
{
	var numero1 = txtIdNumeroUno.value;
	var numero2 = txtIdNumeroDos.value;
	var resultado;

	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);
	
	resultado = numero1 + numero2;
	alert("El resultado de la suma es " + resultado);
}

function restar()
{
	var numero1 = txtIdNumeroUno.value;
	var numero2 = txtIdNumeroDos.value;
	var resultado;

	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);
	
	resultado = numero1 - numero2;
	alert("El resultado de la resta es " + resultado);
}

function multiplicar()
{
	var numero1 = txtIdNumeroUno.value;
	var numero2 = txtIdNumeroDos.value;
	var resultado;

	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);
	
	resultado = numero1 * numero2;
	alert("El resultado de la multiplicación es " + resultado);
}

function dividir()
{
	var numero1 = txtIdNumeroUno.value;
	var numero2 = txtIdNumeroDos.value;
	var resultado;

	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);
	
	resultado = numero1 / numero2;
	alert("El resultado de la división es " + resultado);
}
