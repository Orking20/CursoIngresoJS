/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numero1;
	var numero2;
	var numeroUnoParseado;
	var numeroDosParseado;
	var resultado;

	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero2 = document.getElementById("txtIdNumeroDos").value;

	numeroUnoParseado = parseInt(numero1);
	numeroDosParseado = parseInt(numero2);

	resultado = numeroUnoParseado + numeroDosParseado;

	alert("La suma es " + resultado);
}