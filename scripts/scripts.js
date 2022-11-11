let cantidad = prompt("Cuantos Alumnos Son?")
let alumnosTotales = [];

for (i = 0; i < cantidad; i++){
    alumnosTotales[i] = [prompt("Nombre del alumno" + (i+1)),0];
}

const tomarAsistencia = (nombre,p)=>{
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P") {
        alumnosTotales[i][1]++;
    }
}

for(i=0; i < 1; i++){
    for (alumno in alumnosTotales){
        tomarAsistencia(alumnosTotales[alumno][0],alumno);
    }
}


for (alumno in alumnosTotales) {
    let resultado = `${alumnosTotales[alumno][0]}:<br>
    _Presentes: ${alumnosTotales[alumno][1]} <br>
    _Ausencias: ${parseInt (alumnosTotales[alumno[1]])}`;
    if (alumnosTotales [alumno][1]<1){
        resultado =+ "AUSENTE";
    } else {
    resultado =+ "<br><br>"}
}
document.write(resultado)