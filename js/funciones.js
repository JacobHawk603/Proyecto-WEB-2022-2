function generarLinea(a, b, c){
    moneda1 = a.value;
    moneda2 = b.value;
    moneda3 = c.value;

    if((moneda1<2 || moneda1>3) || (moneda2<2 || moneda2>3) || (moneda3<2 || moneda3>3)){
        alert("los valores que has insertado no son validos");
    }else{
        document.getElementById("lienzo").innerHTML="______";
    }
}