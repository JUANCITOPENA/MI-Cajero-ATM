class Billete
{
  constructor(v, c)
  {
    this.valor = v;
    this.cantidad = c;
  }
}

function cargarDineroCajero()
{
  caja.push( new Billete(2000, 10) );
  caja.push( new Billete(1000, 10) );
  caja.push( new Billete(500, 10) );
  caja.push( new Billete(200, 10) );
  caja.push( new Billete(100, 10) );
  caja.push( new Billete(50, 10) );
  caja.push( new Billete(20, 10) );
  caja.push( new Billete(10, 10) );
  caja.push( new Billete(5, 10) );
  caja.push( new Billete(1, 10) );
}

function entregarDinero()
{
  dinero = parseInt(monto.value);

  resultado.innerHTML = "<strong>Billetes entregados en transacción actual:</strong><br /><br />";
  if (dinero > 0)
  {
    entregado = [];

    for (var bi of caja)
    {
      if (dinero > 0)
      {
        div = Math.floor(dinero / bi.valor);
        if (div > bi.cantidad)
        {
          papeles = bi.cantidad;
        }
        else
        {
          papeles = div;
        }
        entregado.push( new Billete(bi.valor, papeles) );
        dinero -= (bi.valor * papeles);
      }
    }

    if (dinero > 0)
    {
      resultado.innerHTML += "<strong>No está disponible el monto solicitado en este cajero. Lo siento. :(</strong><br />";
    }
    else
    {
      var uriImagenBillete = "";
      for (var i = 0; i < entregado.length; i++)
      {
        if (entregado[i].cantidad > 0)
        {
          caja[i].cantidad -= papeles;
          uriImagenBillete = obtenerUriImagenBillete(entregado[i].valor);
          for (var j = 1; j <= entregado[i].cantidad; j++)
          {
            resultado.innerHTML += "<img src='" + uriImagenBillete + "' width='500' height='250' />";
          }
          resultado.innerHTML += "<br />";
        }
      }
    }
  }
  else
  {
    resultado.innerHTML += "<strong>ERROR: No ha ingresado un monto válido. >:(</strong><br />";
  }

  mostrarEstadoActualCajero();
}

function obtenerUriImagenBillete(valor)
{
  var uri = "";

  switch (valor)
  {
    case 1:
      uri = "imagenes/1.jpg";
    break;
    case 5:
      uri = "imagenes/5.jpg";
    break;
    case 10:
      uri = "imagenes/10.jpg";
    break;
    case 20:
      uri = "imagenes/20.jpg";
    break;
    case 50:
      uri = "imagenes/50.jpeg";
    break;
    case 100:
      uri = "imagenes/100.jpg";
    break;
    case 200:
      uri = "imagenes/200.jpg";
    break;
    case 500:
      uri = "imagenes/500.jpg";
    break;
    case 1000:
      uri = "imagenes/1000.jpg";
    break;
    case 2000:
      uri = "imagenes/2000.jpg";
    break;
  }

  return uri;
}

function mostrarEstadoActualCajero()
{
  estadoCajero.innerHTML = "<strong>Total de billetes que quedan en el cajero:</strong><br /><br />";

  for (var c of caja)
  {
    estadoCajero.innerHTML += c.cantidad + " Pepeletas de RD$: " + c.valor + "<br />";
  }

}

var caja = [];
var entregado = [];
var dinero = 0;
var div = 0;
var papeles = 0;

var monto = document.getElementById("dinero");
var resultado = document.getElementById("resultado");
var boton = document.getElementById("extraer");
var estadoCajero = document.getElementById("estadoCajero");
var estadoCajero = document.getElementById("estadoCajero");

cargarDineroCajero();
mostrarEstadoActualCajero();
boton.addEventListener("click", entregarDinero);
