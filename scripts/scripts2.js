let misCompras = []
let productos = [
{
        id: 1,
        nombre: "Phanton",
        stock: true,
        marca: "PACO RABANNE",
        img: "./images/imagen1.png"
    },
{
        id: 2,
        nombre: "Smiling Men",
        stock: false,
        marca: "YSV",
        img: "./images/imagen2.png"
    },
{
        id: 3,
        nombre: "Smiling Women",
        stock: true,
        marca: "YSV",
        img: "./images/imagen3.png"
    },
{
        id: 4,
        nombre: "Memori Cédre Secret",
        stock: true,
        marca: "KENZO",
        img: "./images/imagen4.png"
    },
{
        id: 5,
        nombre: "My Way",
        stock: false,
        marca: "GIORGIO ARMANI",
        img: "./images/imagen5.png"
    },
{
        id: 6,
        nombre: "Kenzo Flower",
        stock: true,
        marca: "KENZO",
        img: "./images/imagen6.png"
}
]

let html = ""

productos.forEach(el => {
    const classCard = el.productos ? "grid-container" : "grid-item"
    html += `
    
    <div class=${classCard}>
    <img src=${el.img} class="imgclass"/>

    <ul class="list">

        <hr/>
        <br/>
        <li>
            <p class="nombres">
                <b>
                    ${el.nombre}
                </b>
            </p>
        </li>
        </br>
        <li>
            <p class="nombres">
                <b>
                    ${el.marca}
                </b>
            </p>
        </li>
    </ul>
    <button id=${el.id} class="button" onclick=comprar(${el.id})>Comprar</button>
</div>
`


})
// ENLACE DE MI HTML A JS
document.getElementById("container").innerHTML = html


function comprar(idAComprar) {

    let revisionDeStock = productos.find(el => el.id === idAComprar)
    localStorage.getItem("lista") ? misCompras = JSON.parse(localStorage.getItem("lista")) : misCompras = []

    if (revisionDeStock.stock) {
        if (!misCompras.some(el => el.id === idAComprar)) {
            let perfumes = productos.find(el => el.id === idAComprar)
            misCompras.push(perfumes)
            localStorage.setItem("lista", JSON.stringify(misCompras))
        } 
      else{
        Swal.fire(
            'Compra Exitosa!',
            'Gracias por tu compra!',
            'success'
          )

      }  
    } else {
         Swal.fire(
             'Compra Rechazada',
             'Lo sentimos!<br>No hay stock disponible de este producto.',
             'error'
           )
    }
}




// "button".onclick = () =>{
//     Swal.fire(
//         'Good job!',
//         'You clicked the button!',
//         'success',
//       )
      
// };


// function darseDeBaja(idADarDeBaja) {

//     let revisionDeCupos = deportes.find(el => el.id === idADarDeBaja)
//     localStorage.getItem("lista") ? misInscripciones = JSON.parse(localStorage.getItem("lista")) : misInscripciones = []

//     if (revisionDeCupos.cupos) {
//         if (!misInscripciones.some(el => el.id === idADarDeBaja)) {
//             alert("No podés darte de baja de algo a lo que no te inscribiste, pa!")
//         } else {
//             misInscripciones = misInscripciones.filter(el => el.id !== idADarDeBaja)
//             localStorage.setItem("lista", JSON.stringify(misInscripciones))
//         }
//     } else {
//         alert("Disciplina NO DISPONIBLE: Tampoco podés darte de baja")
//     }
// }
