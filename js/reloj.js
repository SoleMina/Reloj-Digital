$(document).ready(function() {
    setInterval("digiClock()", 1000);
})
function digiClock() {
    var vDate = new Date();
    var vHora = vDate.getHours();
    var vMin = vDate.getMinutes();
    var vSeg = vDate.getSeconds();

    vMin = ( vMin < 10 ? "0" : "") + vMin;
    vSegu = ( vSeg < 10 ? "0" : "") + vSeg;

    var vAMPM = ( vHora < 12) ? "AM" : "PM";


    vHora = (vHora < 10 ? "0" : "") + vHora;

    vSeg = (vSeg < 10 ? "0" : "") + vSeg;

    var vHoraSistema = vHora + ":"+ + vMin + ":" + vSeg + " " + vAMPM;

    $("#clock").html(vHoraSistema);
}
 $(document).ready(function(){
    $("button").click(function(){
        $(this).text("hola")
    })
 })