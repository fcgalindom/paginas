var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var xc =250;
var yc =250;
var valor = true;
var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
  };
var fondo = {
  url: "tile.png",
  cargaOK: false
}
var vaca = {
  url: "vaca.png",
  cargaOK: false
};
var pollo = {
    url: "pollo.png",
    cargaOK:false
}
var cerdo = {
     url : "cerdo.png",
     cargaOK: false
}
var cantidad = aleatorio(1, 10);
var xf = aleatorio(0, 7);
var yf = aleatorio(0, 10);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;

pollo.imagen.addEventListener("load",cargarPollos);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load",cargarCerdo);
function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}
function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
}
function cargarPollos(){
    pollo.cargaOK=true;
    dibujar();
}
function cargarCerdo(){
    cerdo.cargaOK = true;
    dibujar();

}

function numeroDeVacas() {
console.log(cantidad+"c");
var v=0;

    while( v < cantidad )
    {
      var xVaca = aleatorio(0, 7);
      var yVaca = aleatorio(0, 10);
      console.log(xVaca);
      xVaca = xVaca * 60;
      yVaca = yVaca * 40;
      papel.drawImage(vaca.imagen, xVaca, yVaca);
      
     v++;
    }
   

    
}


function numeroDePollos() {
  for(var v=0; v < cantidad; v++)
    {
       
        var x = xf * 60;
        var y = yf * 40;

        papel.drawImage(pollo.imagen, x, y);
        
    }
}

function dibujar()
{

  if(fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(vaca.cargaOK)
  {
    numeroDeVacas();
  }

  if (pollo.cargaOK) {
    numeroDePollos();
  }
  if (cerdo.cargaOK) {
  
    document.addEventListener("keyup", dibujarTeclado);
    papel.drawImage(cerdo.imagen, xc, yc); 


  
  }
}



function  dibujarTeclado(evento) {
    
    switch(evento.keyCode)
    {
      case teclas.UP:
        
         yc-= 20; 
         papel.drawImage(fondo.imagen, 0, 0);
         numeroDeVacas();
         numeroDePollos();
           papel.drawImage(cerdo.imagen, xc, yc);
          
     
      break;
      case teclas.DOWN:
          yc+=20;
          papel.drawImage(fondo.imagen, 0, 0);
          numeroDeVacas();
          numeroDePollos();
            papel.drawImage(cerdo.imagen, xc, yc);
           
      break;
      case teclas.RIGHT:
          xc+=20;
          papel.drawImage(fondo.imagen, 0, 0);
          numeroDeVacas();
          numeroDePollos();
            papel.drawImage(cerdo.imagen, xc, yc);
           
        
            break;
      case teclas.LEFT:
          xc-=20;
          papel.drawImage(fondo.imagen, 0, 0);
          numeroDeVacas();
          numeroDePollos();
            papel.drawImage(cerdo.imagen, xc, yc);
           
            break;    


      
    }
    
}
function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}