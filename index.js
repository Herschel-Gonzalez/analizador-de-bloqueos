
var input = document.getElementById("input");
var reporteAsientos = [];
var sembradoAsientos = [];
input.addEventListener('change', function () {
    readXlsxFile(input.files[0]).then(function (data) {

        for (let i = 1; i < data.length; i++) {

            if (data[i][0] != null && data[i][1] != null) {
                //almacenamos los asientos del reporte
                var aux = data[i][0];
                var section = quitarCerosAlaIzquierda(aux);
                reporteAsientos.push((section+"-"+ data[i][1]).toUpperCase());
                
                
            }

            if (data[i][2] != null && data[i][3] != null) {
                //almacenamos los asientos del sembrado
                sembradoAsientos.push((data[i][2] +"-"+ data[i][3]).toUpperCase());
            }
        }


       // console.log(reporteAsientos);
       // console.log(sembradoAsientos);

        //revisamos si cada bloqueo del sembrado existe en el reporte
        var salida = "";
        for (let i = 0; i < sembradoAsientos.length; i++) {
            if (!reporteAsientos.includes(sembradoAsientos[i])) {
                salida+=sembradoAsientos[i] + " no esta bloqueado <br>";
            }

        }

        if (salida!="") {
            document.getElementById("salida").innerHTML=salida;
        }else{
            document.getElementById("salida").innerHTML="Todos los asientos del sembrado ya se encuentran bloqueados";
        }

        



    });
});

var prueba = quitarCerosAlaIzquierda("T1-11");

function quitarCerosAlaIzquierda(cadena){
    var antesGuion = "";
    var despuesGuion = "";
    var enElguion = false;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i]!='-'&& enElguion==false) {
            antesGuion+=cadena[i];
            
        }else{
            enElguion=true;
            despuesGuion+=cadena[i];
        }
        
    }
    var aux = Number(despuesGuion);
    var salida = antesGuion+=+aux;
    return salida;
}
