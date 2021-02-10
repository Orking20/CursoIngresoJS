/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 */
function CalcularPrecio () 
{
	var cantLamparas;
	var precioLampara;
	var marca;
	var precioConDescuento;
	var descuento;

	precioLampara = 35;
	cantLamparas = document.getElementById("txtIdCantidad").value;
	marca = document.getElementById("Marca").value;

	precioLampara = precioLampara * cantLamparas;

	if (cantLamparas >= 6)
	{
		descuento = (precioLampara * 50) / 100;
	}
	else if (cantLamparas == 5)
	{
		if (marca == "ArgentinaLuz")
		{
			descuento = (precioLampara * 40) / 100;
		}
		else
		{
			descuento = (precioLampara * 30) / 100;
		}
	}
	else if (cantLamparas == 4)
	{
		if (marca == "ArgentinaLuz" || marca == "FelipeLamparas")
		{
			descuento = (precioLampara * 25) / 100;
		}
		else
		{
			descuento = (precioLampara * 20) / 100;
		}
	}
	else if (cantLamparas == 3)
	{
		if (marca == "ArgentinaLuz")
		{
			descuento = (precioLampara * 15) / 100;
		}
		else if (marca == "FelipeLamparas")
		{
			descuento = (precioLampara * 10) / 100;
		}
		else
		{
			descuento = (precioLampara * 5) / 100;
		}
	}

	precioConDescuento = precioLampara - descuento;
	precioConDescuento = parseInt(precioConDescuento);

	if (precioConDescuento > 120)
	{
		descuento = 0;
		descuento = (precioConDescuento * 10) / 100;
		precioConDescuento = precioConDescuento + descuento;

		alert("IIBB Usted pagó " + descuento);
	}

	document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
}