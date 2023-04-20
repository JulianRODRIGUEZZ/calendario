function mostrarCalendario() {
    var calendario = document.getElementById("calendario");
    if (calendario.style.display === "block") {
      calendario.style.display = "none";
    } else {
      calendario.style.display = "block";
      crearCalendario();
    }
  }

  
  function crearCalendario() {
    var calendario = document.getElementById("calendario");
    var fecha = document.getElementById("fecha").value;
    var fechaObj = fecha === "" ? new Date() : new Date(fecha);
    var mes = fechaObj.getMonth();
    var anio = fechaObj.getFullYear();
    var diasMes = new Date(anio, mes + 1, 0).getDate();
    var primerDiaSemana = new Date(anio, mes, 1).getDay();
    var tabla = "<table>";
    tabla += "<tr><th colspan='7'>" + obtenerNombreMes(mes) + " " + anio + "</th></tr>";
    tabla += "<tr><th>Domingo</th><th>Lunes</th><th>Martes</th><th>Miércoles</th><th>Jueves</th><th>Viernes</th><th>Sábado</th></tr>";
    var dia = 1;
    for (var i = 0; i < 6; i++) {
      tabla += "<tr>";
      for (var j = 0; j < 7; j++) {
        if (i === 0 && j < primerDiaSemana) {
          tabla += "<td></td>";
        } else if (dia > diasMes) {
          tabla += "<td></td>";
        } else {
          tabla += "<td onclick='seleccionarFecha(" + dia + "," + mes + "," + anio + ")'>" + dia + "</td>";
          dia++;
        }
      }
      tabla += "</tr>";
    }
    tabla += "</table>";
    calendario.innerHTML = tabla;
  }
  
  function obtenerNombreMes(mes) {
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    return meses[mes];
  }
  
  function seleccionarFecha(dia, mes, anio) {
    var fecha = new Date(anio, mes, dia);
    document.getElementById("fecha").value = fecha.getFullYear() + "-" + (fecha.getMonth() + 1).toString().padStart(2, "0") + "-" + fecha.getDate().toString().padStart(2, "0");
    document.getElementById("calendario").style
  }  
















  function mostrarCalendario1() {
    var calendario1 = document.getElementById("calendario1");
    if (calendario1.style.display === "block") {
      calendario1.style.display = "none";
    } else {
      calendario1.style.display = "block";
      crearCalendario1();
    }
  }
  
  function crearCalendario1() {
    var calendario1 = document.getElementById("calendario1");
    var fecha1 = document.getElementById("fecha1").value;
    var fechaObj1 = fecha1 === "" ? new Date() : new Date(fecha1);
    var mes1 = fechaObj1.getMonth();
    var anio1 = fechaObj1.getFullYear();
    var diasMes1 = new Date(anio1, mes1 + 1, 0).getDate();
    var primerDiaSemana1 = new Date(anio1, mes1, 1).getDay();
    var tabla1 = "<table>";
    tabla1 += "<tr><th colspan='7'>" + obtenerNombreMes(mes1) + " " + anio1 + "</th></tr>";
    tabla1 += "<tr><th>Domingo</th><th>Lunes</th><th>Martes</th><th>Miércoles</th><th>Jueves</th><th>Viernes</th><th>Sábado</th></tr>";
    let dia = 1;
    for (var i = 0; i < 6; i++) {
      tabla1 += "<tr>";
      for (var j = 0; j < 7; j++) {
        if (i === 0 && j < primerDiaSemana1) {
          tabla1 += "<td></td>";
        } else if (dia > diasMes1) {
          tabla1 += "<td></td>";
        } else {
          tabla1 += "<td onclick='seleccionarFecha(" + dia + "," + mes1 + "," + anio1 + ")'>" + dia + "</td>";
          dia++;
        }
      }0
      tabla1 += "</tr>";
    }
    tabla1 += "</table>";
    calendario1.innerHTML = tabla1;
  }
  
  function obtenerNombreMes1(mes1) {
    var meses1 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    return meses1[mes1];
  }
  
  function seleccionarFecha1(dia1, mes1, anio1) {
    var fecha1 = new Date(anio1, mes1, dia1);
    document.getElementById("fecha1").value = fecha1.getFullYear() + "-" + (fecha1.getMonth() + 1).toString().padStart(2, "0") + "-" + fecha1.getDate().toString().padStart(2, "0");
    document.getElementById("calendario1").style
  }  