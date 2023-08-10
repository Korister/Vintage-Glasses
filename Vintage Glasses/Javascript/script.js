function obtenerDatos(){
    var fecha = document.getElementById("fecha").value;
    var hora = document.getElementById("hora").value;
    var link = document.getElementById("enviar");
    if(fecha=='' && hora=='')
    alert('Ingrese una fecha y hora');
    else if(fecha=='')
    alert('Ingrese una fecha');
    else if(hora=='')
    alert('Ingrese una hora');
    else
    link.href = 'https://wa.me/+524775424007?text=Buenas%20tardes.%20Me%20gustaria%20agendar%20una%20cita%20el%20dia%20'+fecha+'%20a%20las%20'+hora+',%20gracias!';
}