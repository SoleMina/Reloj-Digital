$(document).ready(function() {
    setInterval("digiClock()", 1000);
    window.location.closeVentana();

})
function digiClock() {
    var fecha = new Date();
    var vHora = fecha.getHours();
    var vMin = fecha.getMinutes();
    var vSeg = fecha.getSeconds();
    var vDay = fecha.getDay();
    var vDate = fecha.getDate();
    var vMonth = fecha.getMonth();
    
    //Anteponer un cero a los minutos y segundos, para estilizarlos.
    vMin = ( vMin < 10 ? "0" : "") + vMin;
    vSegu = ( vSeg < 10 ? "0" : "") + vSeg;

    //Definiendo si es día o tarde con los am y pm:
    var vAMPM = ( vHora < 12) ? "AM" : "PM";


    vHora = (vHora < 10 ? "0" : "") + vHora;

    vSeg = (vSeg < 10 ? "0" : "") + vSeg;
    
    //Días de la semana
    var semana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    pdia = semana[vDay];
    
    //Meses
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octumbre", "Noviembre", "Diciembre"];
    pmeses = meses[vMonth];
    
    var vHoraSistema = vHora + ":"+  vMin + ":" + vSeg + " " + vAMPM;
    var vDaySistema = vDay + " " + "de" + " "+ vMonth;
    
    /*
    var mexico = fecha.getHours();
    mexicos = mexico + 14;
    */

    $("#clock").html(vHoraSistema);
    $(".day").html(pdia +", "+vDate +" de " +pmeses);
    //$(".special").html(mexicos);
}
//Abrir la pequeña ventana para elegir otro país:
 $(document).ready(function(){
    $("button").click(openVentana());
 })
function openVentana() {
    $(".ventana").slideDown("slow");
}
function closeVentana() {
    $(".ventana").slideUp("fast");
}

function tachar(checkbox) {
    var fecha = new Date();
    var vHora = fecha.getHours();
    var vDay = fecha.getDay();
    var vMin = fecha.getMinutes();

    vMin = ( vMin < 10 ? "0" : "") + vMin;
    
    var semana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    pdia = semana[vDay];

    var mex = fecha.getHours();
    mexico = parseInt(((mex / 24)+2) + 14);
    if(checkbox.checked){
        $(".special").html("Mexico" + "        " + mexico + ":" + vMin);
    }else {
        alert("Hubo un error");
    }

}






















/*
if(mexico > 24 && checkbox.checked){
        mexico = (mex % 24) +14
        $(".special").html(mexico);
    }else{
        $(".special").html(mexico);
    }
*/