

var d = document.getElementById("dibujo");
var valot ="ded";
var linezo;

function marte() {
    var uno =document.getElementById("dos").value;
    
console.log(uno);
  var  resultado = (uno*9.81)/3.711;

  document.getElementById("solucion").value = "Resultado" +"  "+ resultado;

}

function jupiter() {
    var uno =document.getElementById("dos").value;
    
    console.log(uno);
      var  resultado = (uno*9.81)/ 24.79;
    
      document.getElementById("solucion").value = "Resultado" +"  "+ resultado+valot;


   }





