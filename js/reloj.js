$(document).ready(function() {
    setInterval("digiClock()", 1000);
})
function digiClock() {
    var fecha = new Date();
    var vHora = fecha.getHours();
    var vMin = fecha.getMinutes();
    var vSeg = fecha.getSeconds();
    var vDay = fecha.getDay();
    var vDate = fecha.getDate();
    var vMonth = fecha.getMonth();

    vMin = ( vMin < 10 ? "0" : "") + vMin;
    vSegu = ( vSeg < 10 ? "0" : "") + vSeg;

    var vAMPM = ( vHora < 12) ? "AM" : "PM";


    vHora = (vHora < 10 ? "0" : "") + vHora;

    vSeg = (vSeg < 10 ? "0" : "") + vSeg;
    
    var semana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    pdia = semana[vDay];

    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octumbre", "Noviembre", "Diciembre"];
    pmeses = meses[vMonth];

    var vHoraSistema = vHora + ":"+  vMin + ":" + vSeg + " " + vAMPM;
    var vDaySistema = vDay + " " + "de" + " "+ vMonth;

    $("#clock").html(vHoraSistema);
    $(".day").html(pdia +", "+vDate +" de " +pmeses);
}
 $(document).ready(function(){
    $("button").click(function(){
        $(this).text("hola")
    })
 })