const obtenerInformacion = (materia)=>{
    materias = {
        fisica: ["Perez","juan, maria, tomas"],  
        matematica: ["Rodriguez","pedro, juan, maria, tomas"],
        historia: ["Hernandez","pedro, tomas"],
        quimica: ["Comeron","pedro, juan, maria"]
    }

if (materias[materia] !== undefined){
    return [materias[materia],materia,materias];
} else{
    return materias;
    }
}

const mostrarInformacion = (materia)=>{
    let informacion = obtenerInformacion(materia);


if (informacion !== false){
    let profesor = informacion[0][0];
    let alumnos = informacion[0];
    alumnos.shift();
    console.log(`El profesor de ${informacion[1]} es:${profesor} <br>
    Los alumnos son: ${alumnos} <br> <br>`); 
}
}

const cantidadDeClases = (alumno)=>{
    let informacion = obtenerInformacion();
    let clasesPresentes = [];
    let cantidadTotal = 0;
    for (info in informacion) {
        if (informacion[info].includes(alumno)){
            cantidadTotal++;
            clasesPresentes.push(" "+ info);

        }
    }
    return `${alumno} está en ${cantidadTotal} clases ${clasesPresentes}`;
}


mostrarInformacion ("fisica");
mostrarInformacion ("matematica");
mostrarInformacion ("historia");
mostrarInformacion ("quimica");

prompt("Preguntar: En cuantas clases esta tomas?")


alert(cantidadDeClases("tomas"))



// let cantidad = prompt("Cuantos Alumnos Son?")
// let alumnosTotales = [];

// for (i = 0; i < cantidad; i++){
//     alumnosTotales[i] = [prompt("Nombre del alumno" + (i+1)),0];
// }

// const tomarAsistencia = (nombre,p)=>{
//     let presencia = prompt(nombre);
//     if (presencia == "p" || presencia == "P") {
//         alumnosTotales[i][1]++;
//     }
// }

// for(i=0; i < cantidad; i++){
//     for (alumno in alumnosTotales){
//         tomarAsistencia(alumnosTotales[alumno][0],alumno);
//     }
// }


// for (alumno in alumnosTotales) {
//     let resultado = `${alumnosTotales[alumno][0]}:<br>
//     _Presentes: ${alumnosTotales[alumno][1]} <br>
//     _Ausencias: ${(alumnosTotales[alumno[1]])}`;
//     if (alumnosTotales [alumno][1]<1){
//         resultado += "<br>";
//     } else {
//     resultado += "<br><br>"}
//     alert(resultado)
// }