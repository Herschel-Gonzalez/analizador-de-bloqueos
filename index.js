

function analizarAsientos() {

    //Reporte de bloqueos

    

    const inputSeccionReporte = document.getElementById("InputSeccionReporte");
    const seccionReporte = String(inputSeccionReporte.value);

    const inputAsientoReporte = document.getElementById("InputAsientoReporte");
    const asientoReporte = String(inputAsientoReporte.value);



    //Sembrado
    const inputSeccionSembrado = document.getElementById("InputSeccionSembrado");
    const seccionSembrado = String(inputSeccionSembrado.value);

    const inputAsientoSembrado = document.getElementById("InputAsientoSembrado");
    const asientoSembrado = String(inputAsientoSembrado.value);

    //Se une la seccion con el asiento para poder comparar

    //Reporte de bloqueos
    var reporte = unirSeccionyAsiento(seccionReporte, asientoReporte);

    //Sembrado
    var sembrado = unirSeccionyAsiento(seccionSembrado, asientoSembrado);

    //Comparamos si los bloqueos del sembrado existen en el reporte de bloqueos

    var salida = "";
    for (let i = 0; i < sembrado.length; i++) {
        if (!reporte.includes(sembrado[i])) {
            salida+=sembrado[i]+" no esta bloqueado <br>";
        }

    }

    document.getElementById("salida").innerHTML=salida;


}

function unirSeccionyAsiento(secciones, asientos) {

    var aux = "";
    var seccionesConAsiento = [];

    var seccionesLimpias =[];
    var asientosLimpios =[];

    //agrupamos las secciones
    for (let i = 0; i < secciones.length; i++) {
        if (secciones[i] == ' ') {
            seccionesLimpias.push(aux);
            aux = "";
        } else {
            aux += secciones[i];
        }

    }

    //agrupamos los asientos
    aux="";
    for (let i = 0; i < asientos.length; i++) {
        if (asientos[i] == ' ') {
            asientosLimpios.push(aux);
            aux = "";
        } else {
            aux += asientos[i];
        }

    }

    //unimos secciones con asientos
    for (let i = 0; i < seccionesLimpias.length; i++) {
        seccionesConAsiento.push(seccionesLimpias[i]+"-"+asientosLimpios[i]);
        
    }

    return seccionesConAsiento;

}



