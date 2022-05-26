var hexagrama =[""];

function generarLinea(a, b, c){
    var moneda1 = Number(a.value);
    var moneda2 = Number(b.value);
    var moneda3 = Number(c.value);

    var cadena="";

    if((moneda1<2 || moneda1>3) || (moneda2<2 || moneda2>3) || (moneda3<2 || moneda3>3)){
        alert("los valores que has insertado no son validos");
    }else{
        //document.getElementById("lienzo").innerHTML="______";
        console.log(typeof(moneda1))

        var suma = moneda1 + moneda2 + moneda3;
        console.log(typeof(suma))

        if(suma ==6){
            console.log("esto si lo hago");
            hexagrama.unshift('___x___');
            
        }else if((moneda1 + moneda2 + moneda3)==7){
            hexagrama.unshift('_______');
        }else if((moneda1 + moneda2 + moneda3)==8){
            hexagrama.unshift('__   __');
        }else if((moneda1 + moneda2 + moneda3)==9){
            hexagrama.unshift('___0___');
        }
    }

    for(var i = 0; i<hexagrama.length-1; i++){
        
        cadena += "<h1>"+hexagrama[i]+"</h1>";
    }

    document.getElementById("lienzo").innerHTML=cadena;
}