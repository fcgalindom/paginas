var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
  };
  
  document.addEventListener("keydown", dibujarTeclado);
  var cuadrito = document.getElementById("area_de_dibujo");
  var papel = cuadrito.getContext("2d");
  var x = 150;
  var y = 150;
  
  dibujarLinea("red", x-1, y-1, x+1, y+1, papel);
  
  function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
  {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
  }
  
  function dibujarTeclado(evento)
  {
    var colorcito = "#FAA";
    var movimiento = 5;
    switch(evento.keyCode)
    {
      case teclas.UP:
    console.log("arriva");
      break;
      case teclas.DOWN:
      console.log("abajo");
      break;
      case teclas.RIGHT:
            console.log("derecha");
            break;
      case teclas.LEFT:
      console.log("izquierda");
            break;    


      
    }
  }