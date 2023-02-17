const AlumnosmenoresA40kilos = []; const Alumnosentre40kilosy50kilos = [];
const AlumnosdeMasde50yMenosde60kilos = [];
const Alumnosconmas60kilos = [];


let Alumnos = prompt("Cuantos alumnos Tiene el Colegio");

for (i=1; i<=Alumnos; i++) {
  var PesodeLosalumnos = prompt("Agrega un peso: ");

if (PesodeLosalumnos < 40){
    AlumnosmenoresA40kilos.push('1');

}else if (PesodeLosalumnos >= 40 && PesodeLosalumnos <= 50){
    Alumnosentre40kilosy50kilos.push('1');

}else if (PesodeLosalumnos > 50 && PesodeLosalumnos < 60){
    AlumnosdeMasde50yMenosde60kilos.push('1');

}else{
    Alumnosconmas60kilos.push('1');
}

}

document.write("el total es " +  AlumnosmenoresA40kilos.length + " alumnos con un peso menor de 40kilos" + "<br />" );
document.write("el total es " +  Alumnosentre40kilosy50kilos.length + " alumnos con un peso entre 40kilos y 50kilos "  + "<br />");
document.write("el total es " +  AlumnosdeMasde50yMenosde60kilos.length + " alumnos con un peso de mayor a 50kilos y menos a 60kilos"  + "<br />");
document.write("el total es " +  Alumnosconmas60kilos.length + " alumnos con un peso mayor a 60kilos"  + "<br />" );
