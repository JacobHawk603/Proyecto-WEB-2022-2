var hexagrama =[""];
var suma;

//variables de canvas

var lienzo = document.getElementById("canva");
var lienzo2 = document.getElementById("canva2");
var lienzo3 = document.getElementById("canva3");

console.log(lienzo)
var ctx = lienzo.getContext("2d");
var ctx2 = lienzo2.getContext("2d");
var ctx3 = lienzo3.getContext("2d");

var x = lienzo.width/2-25;
var y = 75;
var bottom = lienzo.height-y/2;
var pila = [];

var dWidth = 5;
var dHeight = 5;

var width = 100;
var height = 35;

var banderaTope = true;

var contador = 0;
var contador2 =26;


//-------------------------------------------------------------
//funciones de canvas

function drawBackground(){
    ctx.fillStyle = "rgb(94, 209, 157)";
    ctx.fillRect (100, 50, lienzo.width, lienzo.height);

    ctx.font = '12px negrita Times';
    ctx.fillText ("x", 0, 100);
    ctx.fillText ("y", 0, 50);  
}

function drawBackground2(){
    ctx2.fillStyle = "rgb(94, 209, 157)";
    ctx2.fillRect (100, 50, lienzo.width, lienzo.height);

    ctx2.font = '12px negrita Times';
    ctx2.fillText ("x", 0, 100);
    ctx2.fillText ("y", 0, 50);  
}

function drawBackground3(){
    ctx3.fillStyle = "rgb(94, 209, 157)";
    ctx3.fillRect (100, 50, lienzo.width, lienzo.height);

    ctx3.font = '12px negrita Times';
    ctx3.fillText ("x", 0, 100);
    ctx3.fillText ("y", 0, 50);  
}

function pop(){
    animateBlockRise();
}

function push(){

    animateBlockDrop();
    //console.log(pila);
}

function drawblock(x, y, suma){
    //console.log("esto si se esta haciendo");
    if(suma == 6){
        ctx.fillStyle="rgb(67, 151, 188)";
        ctx.fillRect(x, y, 100,15);

        ctx.fillStyle="rgb(67, 151, 188)";
        ctx.fillRect(x+120, y, 100,15);

        ctx.fillStyle = "#000000";
        ctx.font = '26px negrita Times';
        ctx.fillText("X", x+105, y);
    }else if(suma == 7){
        ctx.fillStyle="rgb(67, 151, 188)";
        ctx.fillRect(x, y, 220,15);
    }else if(suma == 8){
        ctx.fillStyle="rgb(67, 151, 188)";
        ctx.fillRect(x, y, 100,15);

        ctx.fillStyle="rgb(67, 151, 188)";
        ctx.fillRect(x+120, y, 100,15);
    }else if(suma == 9){
        ctx.fillStyle="rgb(67, 151, 188)";
        ctx.fillRect(x, y, 220,15);
        ctx.fillStyle = "#000000";
        ctx.font = '26px negrita Times';
        ctx.fillText("O", x+105, y);
    }
        
    
    //ctx.fillText (contador, x + width/2-5, y+height/2+10);
    return [x, y, suma];
}

function drawblock2(x, y, hexagrama){
    //console.log("esto si se esta haciendo");
    
    if(hexagrama == "___x___"){
        ctx2.fillStyle="rgb(67, 151, 188)";
        ctx2.fillRect(x, y, 100,15);

        ctx2.fillStyle="rgb(67, 151, 188)";
        ctx2.fillRect(x+120, y, 100,15);

        ctx2.fillStyle = "#000000";
        ctx2.font = '26px negrita Times';
        ctx2.fillText("X", x+105, y);
    }else if(hexagrama == "_______"){
        ctx2.fillStyle="rgb(67, 151, 188)";
        ctx2.fillRect(x, y, 220,15);
    }else if(hexagrama == "__   __"){
        ctx2.fillStyle="rgb(67, 151, 188)";
        ctx2.fillRect(x, y, 100,15);

        ctx2.fillStyle="rgb(67, 151, 188)";
        ctx2.fillRect(x+120, y, 100,15);
    }else if(hexagrama == "___0___"){
        ctx2.fillStyle="rgb(67, 151, 188)";
        ctx2.fillRect(x, y, 220,15);
        ctx2.fillStyle = "#000000";
        ctx2.font = '26px negrita Times';
        ctx2.fillText("O", x+105, y);
    }
    
        
        
    
    //ctx.fillText (contador, x + width/2-5, y+height/2+10);
    return [x, y];
}

function drawblock3(x, y, hexagrama){
    //console.log("esto si se esta haciendo");
    
    if(hexagrama == "___x___"){
        ctx3.fillStyle="rgb(67, 151, 188)";
        ctx3.fillRect(x, y, 100,15);

        ctx3.fillStyle="rgb(67, 151, 188)";
        ctx3.fillRect(x+120, y, 100,15);

        ctx3.fillStyle = "#000000";
        ctx3.font = '26px negrita Times';
        ctx3.fillText("X", x+105, y);
    }else if(hexagrama == "_______"){
        ctx3.fillStyle="rgb(67, 151, 188)";
        ctx3.fillRect(x, y, 220,15);
    }else if(hexagrama == "__   __"){
        ctx3.fillStyle="rgb(67, 151, 188)";
        ctx3.fillRect(x, y, 100,15);

        ctx3.fillStyle="rgb(67, 151, 188)";
        ctx3.fillRect(x+120, y, 100,15);
    }else if(hexagrama == "___0___"){
        ctx3.fillStyle="rgb(67, 151, 188)";
        ctx3.fillRect(x, y, 220,15);
        ctx3.fillStyle = "#000000";
        ctx3.font = '26px negrita Times';
        ctx3.fillText("O", x+105, y);
    }

        
    
    //ctx.fillText (contador, x + width/2-5, y+height/2+10);
    return [x, y];
}

function animateBlockDrop(){
   
    
    var dy= 10;

    ctx.clearRect(0, 0, lienzo.width, lienzo.height);
    drawBackground();
    
    for(var i = 0; i < pila.length; i++){
        drawblock(pila[i][0], pila[i][1], pila[i][2]);
    }

    if(contador<6){

        var bloque = drawblock(x, y, suma);
        y+=dy;

        if(y<bottom){
            requestAnimationFrame(animateBlockDrop);
        }else{
            bottom -= 35;
            y = 75;
            pila.push(bloque);
            contador++;
        }
    }
    
        
}


function animateBlockRise(){
    var dy= 10;

    console.log(pila);

    ctx.clearRect(0, 0, lienzo.width, lienzo.height);
    drawBackground();
    
    for(var i = 0; i < pila.length; i++){
        drawblock(pila[i][0], pila[i][1], pila[i][2]);
    }

    //var bloque = drawblock(pila[0][0], pila[0][1]);
 
    if(contador<6){
        if(pila[pila.length-1][1]>75){
            pila[pila.length-1][1] -= dy;
            requestAnimationFrame(animateBlockRise);
        }else{
            pila.pop();
            bottom += 35;
            contador--;

            ctx.clearRect(0, 0, lienzo.width, lienzo.height);
            drawBackground();
        
            for(var i = 0; i < pila.length; i++){
                drawblock(pila[i][0], pila[i][1], pila[i][2]);
            }
        }
    }
}

//--------------------------------------------------------------


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
    
            suma = moneda1 + moneda2 + moneda3;
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
    
        animateBlockDrop();
    }
    
    mostrarHexagrama(cadena, cadena1, cadena2, auxiliares);
    
}

function mostrarHexagrama(cadena, cadena1, cadena2, auxiliares){
    for(var i = 0; i<hexagrama.length-1; i++){
            
        cadena += "<h1>"+hexagrama[i]+"</h1>";
    }


    //document.getElementById("lienzo").innerHTML=cadena;
    drawBackground();
    

    if(hexagrama.length==7){

        auxiliares = HexagramasAuxiliares(hexagrama);
        
        //console.log(HexagramasAuxiliares(hexagrama)[0]);

        if(auxiliares[0]==true){
            
            console.log(auxiliares);
            for(var i = 0; i<hexagrama.length; i++){
                
                cadena1 += "<h1>"+auxiliares[1][i]+"</h1>";
                cadena2 += "<h1>"+auxiliares[2][i]+"</h1>";
            }

            drawBackground2();
            drawBackground3();

            pila.unshift("");

            console.log("aqui esta lo que buscas");
            console.log(pila);
            console.log(auxiliares);

            pila.push([pila[5][0],pila[5][1]-35]);

            for(var i = 1; i < hexagrama.length; i++){
                drawblock2(pila[hexagrama.length-i][0], pila[hexagrama.length-i][1], auxiliares[1][i]);
                drawblock3(pila[hexagrama.length-i][0], pila[hexagrama.length-i][1], auxiliares[2][i]);
            }

            //document.getElementById("lienzo2").innerHTML=cadena1;
            //document.getElementById("lienzo3").innerHTML=cadena2;

        }

        console.log(document.getElementById('columna"'+localizarenTabla(hexagrama)[0]+localizarenTabla(hexagrama)[1]+'"'));
        console.log(localizarenTabla(hexagrama));
        console.log('columna"'+localizarenTabla(hexagrama)[0]+localizarenTabla(hexagrama)[1]+'"')

        if(auxiliares[0] == true){
            //document.getElementById('columna'+localizarenTabla(auxiliares[1])[0]+localizarenTabla(auxiliares[1])[1]+'').style.backgroundColor="yellow"; 
            //document.getElementById('columna'+localizarenTabla(auxiliares[2])[0]+localizarenTabla(auxiliares[2])[1]+'').style.backgroundColor="yellow";     

            var numeroHexagrama = document.getElementById('columna'+localizarenTabla(auxiliares[1])[0]+localizarenTabla(auxiliares[1])[1]+'');
            var numeroHexagrama2 = document.getElementById('columna'+localizarenTabla(auxiliares[2])[0]+localizarenTabla(auxiliares[2])[1]+'');
            
            numeroHexagrama.style.backgroundColor="yellow";
            numeroHexagrama2.style.backgroundColor="green";

            var seccion = document.getElementById("canva2");
            var seccion2 = document.getElementById("canva3");

            console.log(seccion);
            console.log(numeroHexagrama.textContent);

            seccion.addEventListener("mouseover", function(event){
                alert(TextoHexagrama(Number(numeroHexagrama.textContent)));
            });

            seccion2.addEventListener("mouseover", function(event){
                alert(TextoHexagrama(Number(numeroHexagrama2.textContent)));
            });

        }else{
            var numeroHexagrama = document.getElementById('columna'+localizarenTabla(hexagrama)[0]+localizarenTabla(hexagrama)[1]+'');
            numeroHexagrama.style.backgroundColor="yellow";

            var seccion = document.getElementById("canva");
            console.log(seccion);
            console.log(numeroHexagrama.textContent);

            seccion.addEventListener("mouseover", function(event){
                alert(TextoHexagrama(Number(numeroHexagrama.textContent)));
            });

            //document.getElementById('columna'+localizarenTabla(hexagrama)[0]+localizarenTabla(hexagrama)[1]+'').style.backgroundColor="yellow";   
            //document.getElementById('columna'+localizarenTabla(auxiliares[1])[0]+localizarenTabla(auxiliares[1])[1]+'').style.backgroundColor="yellow"; 
            //document.getElementById('columna'+localizarenTabla(auxiliares[2])[0]+localizarenTabla(auxiliares[2])[1]+'').style.backgroundColor="yellow";     


        }
        
    }
}

function localizarenTabla(hexagrama){
    var trigramaInferior = [hexagrama[hexagrama.length-1], hexagrama[hexagrama.length-2], hexagrama[hexagrama.length-3]];
    var trigramaSuperior = [hexagrama[3], hexagrama[2], hexagrama[1]];
    var fila = 0;
    var columna = 0;

    console.log(hexagrama);
    console.log(trigramaInferior);
    console.log(trigramaSuperior);

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
                auxiliar1.push("_______");
                auxiliar2.push("__   __");
            }else if(hexagrama[i]=="___x___"){
                auxiliar1.push("__   __");
                auxiliar2.push("_______");
            }else{
                auxiliar1.push(hexagrama[i]);
                auxiliar2.push(hexagrama[i]);
            }
        }

        return [true, auxiliar1, auxiliar2];
    }else{
        return [false];
    }
}

function eliminarLinea(){
    var cadena="";
    var cadena1="";
    var cadena2="";
    var auxiliares;
    
    hexagrama.shift();
    animateBlockRise();

    mostrarHexagrama(cadena, cadena1, cadena2, auxiliares);
}

function eliminarHexagrama(){
    var cadena="";
    var cadena1="";
    var cadena2="";
    var auxiliares;
    
    hexagrama = [""];
    pila = [];
    contador=0;
    bottom = lienzo.height-y/2;

    mostrarHexagrama(cadena, cadena1, cadena2, auxiliares);
}

function TextoHexagrama(numHex){
    var prediccion ="";

    if(numHex == 1){
        prediccion = "Cielo. Lo creativo. El principio generador";
    }else if(numHex == 2){
        prediccion = "Tierra. Lo receptivo. El principio pasivo";
    }else if(numHex == 3){
        prediccion = "Acumular. El obstáculo inicial.La dificultad del comienzo";
    }else if(numHex == 4){
        prediccion = "Juventud.El joven necio.La inmadurez.";
    }else if(numHex == 5){
        prediccion = "Esperar.La espera.La maduración.";
    }else if(numHex == 6){
        prediccion = "Disputar.El conflicto.El pleito.";
    }else if(numHex == 7){
        prediccion = "Ejército.La legión.";
    }else if(numHex == 8){
        prediccion = "Solidaridad.La unión";
    }else if(numHex == 9){
        prediccion = "Animalito doméstico.La pequeña fuerza";
    }else if(numHex == 10){
        prediccion = "Caminar.El porte.El paso cauteloso";
    }else if(numHex == 11){
        prediccion = "Prosperidad.La paz.La armonía.";
    }else if(numHex == 12){
        prediccion = "Cierre.El estancamiento.Lo inerte.";
    }else if(numHex == 13){
        prediccion = "Hombres Reunidos. La unión comunitaria";
    }else if(numHex == 14){
        prediccion = "Gran dominio. La gran posesión.Lo que se tiene de más.";
    }else if(numHex == 15){
        prediccion = "Condescendencia. La modestia.La humildad";
    }else if(numHex == 16){
        prediccion = "Ocuparse.El entusiasmo.La algarabía.";
    }else if(numHex == 17){
        prediccion = "Conformarse.La continuidad.El seguimiento.";
    }else if(numHex == 18){
        prediccion = "Destrucción.La reconstrucción. La labor en lo corrompido.";
    }else if(numHex == 19){
        prediccion = "Acercarse.Lo que va llegando.";
    }else if(numHex == 20){
        prediccion = "Observar.La contemplación. ";
    }else if(numHex == 21){
        prediccion = "Quebrar mordiendo.La dentellada.La filosa mordedura";
    }else if(numHex == 22){
        prediccion = "Adornar.La elegancia.La gracia.";
    }else if(numHex == 23){
        prediccion = "Resquebrajar.La desintegración.El derrumbe";
    }else if(numHex == 24){
        prediccion = "Regresar.El retorno.Lo que vuelve.";
    }else if(numHex == 25){
        prediccion = "Sinceridad. La inocencia.La naturalidad.";
    }else if(numHex == 26){
        prediccion = "Fuerza educadora.El poder de lo fuerte.La gran acumulación.";
    }else if(numHex == 27){
        prediccion = "Nutrirse.La alimentación.Las fauces.";
    }else if(numHex == 28){
        prediccion = "Excesos.La preponderancia de lo grande.";
    }else if(numHex == 29){
        prediccion = "Peligro.Lo abismal.La caida.";
    }else if(numHex == 30){
        prediccion = "Distinguir.El resplandor.Lo adherente.";
    }else if(numHex == 31){
        prediccion = "Unir.La influencia.La atracción.";
    }else if(numHex == 32){
        prediccion = "Luna Creciente.La duración. La permanencia.";
    }else if(numHex == 33){
        prediccion = "Retirarse.EL repliegue.";
    }else if(numHex == 34){
        prediccion = "Gran fuerza.El gran vigor.";
    }else if(numHex == 35){
        prediccion = "Progresar.El avance.";
    }else if(numHex == 36){
        prediccion = "Luz que se apaga.El oscurecimiento.";
    }else if(numHex == 37){
        prediccion = "Gente de familia. El clan.";
    }else if(numHex == 38){
        prediccion = "Contraste.La oposición.El antagonismo.";
    }else if(numHex == 39){
        prediccion = "Dificultad.El obstáculo. El impedimento.";
    }else if(numHex == 40){
        prediccion = "Explicar.La liberación. El alivio.";
    }else if(numHex == 41){
        prediccion = "Perder.La disminución.";
    }else if(numHex == 42){
        prediccion = "Evolución.El aumento.La ganancia.";
    }else if(numHex == 43){
        prediccion = "Decidir.El desbordamiento.La resolución.";
    }else if(numHex == 44){
        prediccion = "Encontrarse.El acoplamiento.";
    }else if(numHex == 45){
        prediccion = "Cosechar.La reunión.La convergencia.";
    }else if(numHex == 46){
        prediccion = "Subir.El ascenso.La escalada.";
    }else if(numHex == 47){
        prediccion = "Angustia.La pesadumbre.El agotamiento.";
    }else if(numHex == 48){
        prediccion = "El pozo de agua.La fuente.";
    }else if(numHex == 49){
        prediccion = "Renovar.La revolución.El cambio";
    }else if(numHex == 50){
        prediccion = "La caldera.Lo alquímico";
    }else if(numHex == 51){
        prediccion = "Trueno.La conmoción.Lo suscitativo.";
    }else if(numHex == 52){
        prediccion = "Cimientos.La quietud.La detención.";
    }else if(numHex == 53){
        prediccion = "Evolución.El progreso gradual.";
    }else if(numHex == 54){
        prediccion = "Desposar a la hija menor.La doncella.";
    }else if(numHex == 55){
        prediccion = "Abundancia.La plenitud.";
    }else if(numHex == 56){
        prediccion = "Viajero.El andariego";
    }else if(numHex == 57){
        prediccion = "Viento.Lo penetrante.Lo suave.";
    }else if(numHex == 58){
        prediccion = "Recogerse. La serenidad. La satisfacción.";
    }else if(numHex == 59){
        prediccion = "Confusión. La dispersión.La disolución ";
    }else if(numHex == 60){
        prediccion = "Moderación.La restricción.La limitación ";
    }else if(numHex == 61){
        prediccion = "Fe Interior.La verdad interior.La sinceridad interna.";
    }else if(numHex == 62){
        prediccion = "Pequeñas cosas importantes.La pequeña preponderancia.";
    }else if(numHex == 63){
        prediccion = "Conclusiones.Después de la realización.";
    }else if(numHex == 64){
        prediccion = "Inconcluso.Antes de la realización.";
    }

    return prediccion;
}

