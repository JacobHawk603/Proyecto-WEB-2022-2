var hexagrama =[""];

Array.prototype.equals = function (getArray) {
    if (this.length != getArray.length) return false;
  
    for (var i = 0; i < getArray.length; i++) {
      if (this[i] instanceof Array && getArray[i] instanceof Array) {
        if (!this[i].equals(getArray[i])) return false;
      } else if (this[i] != getArray[i]) {
        return false;
      }
    }
    return true;
  };

function generarLinea(a, b, c){
    var moneda1 = Number(a.value);
    var moneda2 = Number(b.value);
    var moneda3 = Number(c.value);

    var cadena="";
    var cadena1 = "";
    var cadena2 = "";
    var auxiliares;

    if(hexagrama.length>6){
        alert("el hexagrama está completo, no puedes insertar mas lineas")
    }else{
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
    
        
    }

    for(var i = 0; i<hexagrama.length-1; i++){
            
        cadena += "<h1>"+hexagrama[i]+"</h1>";
    }


    document.getElementById("lienzo").innerHTML=cadena;

    document.getElementById("prueba").innerHTML='<h1 id="h1">hola</h1>'

    document.getElementById("h1").style.color="RED";

    if(hexagrama.length==7){

        auxiliares = HexagramasAuxiliares(hexagrama);
        
        //console.log(HexagramasAuxiliares(hexagrama)[0]);

        if(auxiliares[0]==true){
            
            console.log(auxiliares);
            for(var i = 0; i<hexagrama.length-1; i++){
                
                cadena1 += "<h1>"+auxiliares[1][i]+"</h1>";
                cadena2 += "<h1>"+auxiliares[2][i]+"</h1>";
            }

            document.getElementById("lienzo2").innerHTML=cadena1;
            document.getElementById("lienzo3").innerHTML=cadena2;

        }

        console.log(document.getElementById('columna"'+localizarenTabla(hexagrama)[0]+localizarenTabla(hexagrama)[1]+'"'));
        console.log(localizarenTabla(hexagrama));
        console.log('columna"'+localizarenTabla(hexagrama)[0]+localizarenTabla(hexagrama)[1]+'"')

        if(auxiliares[0] == true){
            document.getElementById('columna'+localizarenTabla(auxiliares[1])[0]+localizarenTabla(auxiliares[1])[1]+'').style.backgroundColor="yellow"; 
        document.getElementById('columna'+localizarenTabla(auxiliares[2])[0]+localizarenTabla(auxiliares[2])[1]+'').style.backgroundColor="yellow";     
        }else{
            document.getElementById('columna'+localizarenTabla(hexagrama)[0]+localizarenTabla(hexagrama)[1]+'').style.backgroundColor="yellow";   
        document.getElementById('columna'+localizarenTabla(auxiliares[1])[0]+localizarenTabla(auxiliares[1])[1]+'').style.backgroundColor="yellow"; 
        document.getElementById('columna'+localizarenTabla(auxiliares[2])[0]+localizarenTabla(auxiliares[2])[1]+'').style.backgroundColor="yellow";     
        }
        
    }
}

function localizarenTabla(hexagrama){
    var trigramaInferior = [hexagrama[hexagrama.length-2], hexagrama[hexagrama.length-3], hexagrama[hexagrama.length-4]];
    var trigramaSuperior = [hexagrama[2], hexagrama[1], hexagrama[0]];
    var fila = 0;
    var columna = 0;

    console.log(hexagrama);

    if(trigramaInferior.equals(["_______", "_______", "_______"])){
        fila = 0;
    }else if(trigramaInferior.equals(["_______", "__   __", "__   __"])){
        fila = 1;
    }else if(trigramaInferior.equals(["__   __", "_______", "__   __"])){
        fila = 2;
    }else if(trigramaInferior.equals(["__   __", "__   __", "_______"])){
        fila = 3;
    }else if(trigramaInferior.equals(["__   __", "__   __", "__   __"])){
        fila = 4;
    }else if(trigramaInferior.equals(["__   __", "_______", "_______"])){
        fila = 5;
    }else if(trigramaInferior.equals(["_______", "__   __", "_______"])){
        fila = 6;
    }else if(trigramaInferior.equals(["_______", "_______", "__   __"])){
        fila = 7;
    }

    if(trigramaSuperior.equals(["_______", "_______", "_______"])){
        columna = 0;
    }else if(trigramaSuperior.equals(["_______", "__   __", "__   __"])){
        columna = 1;
    }else if(trigramaSuperior.equals(["__   __", "_______", "__   __"])){
        columna = 2;
    }else if(trigramaSuperior.equals(["__   __", "__   __", "_______"])){
        columna = 3;
    }else if(trigramaSuperior.equals(["__   __", "__   __", "__   __"])){
        columna = 4;
    }else if(trigramaSuperior.equals(["__   __", "_______", "_______"])){
        columna = 5;
    }else if(trigramaSuperior.equals(["_______", "__   __", "_______"])){
        columna = 6;
    }else if(trigramaSuperior.equals(["_______", "_______", "__   __"])){
        columna = 7;
    }

    return [fila, columna];
}

function HexagramasAuxiliares(hexagrama){
    var bandera = false;
    var auxiliar1;
    var auxiliar2;
    for(var i = 0; i< hexagrama.length; i++){
        if(hexagrama[i]=='___0___' || hexagrama[i]=='___x___'){
            bandera = true;
        }
    }

    console.log(bandera);
    if(bandera==true){
        var auxiliar1 = [""];
        var auxiliar2 = [""];
        
        for(var i = 0; i<hexagrama.length-1; i++ ){
            if(hexagrama[i]=="___0___"){
                auxiliar1.unshift("_______");
                auxiliar2.unshift("__   __");
            }else if(hexagrama[i]=="___x___"){
                auxiliar1.unshift("__   __");
                auxiliar2.unshift("_______");
            }else{
                auxiliar1.unshift(hexagrama[i]);
                auxiliar2.unshift(hexagrama[i]);
            }
        }

        return [true, auxiliar2, auxiliar1];
    }else{
        return [false];
    }
}