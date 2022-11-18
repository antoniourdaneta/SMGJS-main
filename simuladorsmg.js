//Lista de planes médicos
const cotizador = []
const planesSMG = [
  { id: 01,
    nombre: "PlanSMG Basic",
    ubicacion: "Sanatorio SMG",
    descripcion: "Emergencias y Cobertura Básica",
    preciodelista: 58000,
    img:"../multimedia/LOGOTIPOSMG2.jpg"
  },
  { id: 02,
    nombre: "PlanSMG Bronce",
    ubicacion: "Sanatorio SMG",
    descripcion: "Emergencias, Cobertura Básica y Odontología",
    preciodelista: 62000,
    img:"../multimedia/LOGOTIPOSMG2.jpg"
  },
  { id: 03,
    nombre: "PlanSMG Silver",
    ubicacion: "Sanatorio SMG",
    descripcion: "Emergencias y Cobertura Completa",
    preciodelista: 79000,
    img:"../multimedia/LOGOTIPOSMG2.jpg"
  },
  { id: 04,
    nombre: "PlanSMG Gold",
    ubicacion: "Sanatorio SMG",
    descripcion: "Emergencias, Cobertura Completa y Odontología",
    preciodelista: 88000,
    img:"../multimedia/LOGOTIPOSMG2.jpg"
  },
  { id: 05,
    nombre: "PlanSMG Black",
    ubicacion: "Sanatorio SMG Exclusive",
    descripcion: "Emergencias, Cobertura Completa, Odontología y Servicios Especiales I",
    preciodelista: 128000,
    img:"../multimedia/LOGOTIPOSMG2.jpg"
  },
  { id: 06,
    nombre: "PlanSMG Black I",
    ubicacion: "Sanatorio SMG Exclusive",
    descripcion: "Emergencias, Cobertura Completa, Odontología / Ortodoncia y Servicios Especiales II",
    preciodelista: 142000,
    img:"../multimedia/LOGOTIPOSMG2.jpg"
  },
  { id: 07,
    nombre: "PlanSMG Black II",
    ubicacion: "Sanatorio SMG Exclusive",
    descripcion: "Emergencias, Cobertura Exclusive Media, Odontología / Ortodoncia y Servicios Especiales III",
    preciodelista: 167000,
    img:"../multimedia/LOGOTIPOSMG2.jpg"
  },
  { id: 08,
    nombre: "PlanSMG Black III",
    ubicacion: "Sanatorio SMG Exclusive",
    descripcion: "Emergencias, Cobertura Exclusive Completa, Odontología / Ortodoncia y Servicios Especiales IV",
    preciodelista: 188000,
    img:"../multimedia/LOGOTIPOSMG2.jpg"
  },
]

//Funciones 
//Función para identificarse en el sitio WEB
function identificacion(){
  localStorage.setItem("usuario", prompt("Hola, bienvenido, ¿puede indicarnos su nombre?"))
}

// Función para comparar los planes médicos y poder seleccionar el de preferencia
function item(nombre, id, preciodelista){
  this.nombre = prompt("Inserta el nombre del Plan Médico: ", nombre),
  this.id = prompt("Ingresa el ID del Plán Médico: ", id),
  this.preciodelista = parseFloat(prompt("Introduce el precio de lista del plan: ", preciodelista));
}

let planesMedicos = document.getElementById("planes");
function mostrador(){
    for(const planes of planesSMG){

      //Variable para generar las cards de los planes médicos
      let plan = document.createElement("div");
      
      plan.className="card col-md-3"
        plan.innerHTML += `
        <div class="card a2 botones">
          <img
            src="${planes.img}"
            class="card-img-top"
            alt="${planes.nombre}"
          />
            <div class="card-body">
              <h4 class="card-title">${planes.nombre}</h4>
      
              <button
                type="button"
                class="btn btn-success colorBoton2"
                data-bs-toggle="modal"
                data-bs-target="#p1${planes.id}"
              >
                Agregar al cotizador
              </button>
      
              <!-- despliegue del cuadro flotante -->
              <div
                class="modal fade"
                id="p1${planes.id}"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Cotizar
                      </h5>
                      <button
                        type="button"
                        class="btn-close fondoBoton"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <img
                        src="${planes.img}"
                        class="card-img-top"
                        alt="${planes.nombre}"
                      />
                      <h4 class="card-title">${planes.nombre}</h4>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary fondoBoton botones2"
                        data-bs-dismiss="modal"
                      >
                        Cancelar
                      </button>
                      <button id='AC${planes.id}' type="button" class="btn btn-primary fondoBoton">
                        Cotizar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
          </div>
      </div>
        `;
        planesMedicos.append(plan);
    }
    planesSMG.forEach((planes)=>{
        document.getElementById(`AC${planes.id}`).addEventListener("click",function(){
            agregarAlCotizador(planes);
        });
    });
}

//Función para agregar al simulador los planes médicos
function agregarAlCotizador(planAgregadoAlCotizador){
  if (localStorage.getItem("usuario") === "null" | localStorage.getItem("usuario") === ""){
    localStorage.setItem("usuario", prompt("Hola, bienvenido, ¿puede indicarnos su nombre?"))
  }else{
  cotizador.push(planAgregadoAlCotizador)
  console.table(cotizador)
  }

//Notificación de Sweet Alert sobre los planes agregados al simulador
  Swal.fire({
    title: planAgregadoAlCotizador.nombre,
    text: 'Se agregó al simulador de Planes Médicos',
    imageUrl: planAgregadoAlCotizador.img,
    imageAlt: planAgregadoAlCotizador.nombre,
    ubicacion: planAgregadoAlCotizador.ubicacion,
  });
document.getElementById("tablabody").innerHTML += `
    <tr>
        <td>${planAgregadoAlCotizador.id}</td>
        <td>${planAgregadoAlCotizador.nombre}</td>
        <td>${planAgregadoAlCotizador.descripcion}</td>
        <td>${planAgregadoAlCotizador.preciodelista}</td>
        <td>${planAgregadoAlCotizador.ubicacion}</td>
        <td><button
        type="button"
        id="btn${planAgregadoAlCotizador.id}"
        class="btn btn-light margenesSecundarios"
        data-bs-toggle="modal"
      >
        Suscribirse al Plan Médico
      </button></td>
    </tr>
`;
}

//Función para finalizar la suscripción al plan médico
function suscripcionFinal(){
  Swal.fire({
    title: planAgregadoAlCotizador.nombre,
    text: 'El Plan Médico se ha adquirido exitosamente! Estaremos enviando la información de detalle al usuario.',
    imageUrl: planAgregadoAlCotizador.img,
    imageAlt: planAgregadoAlCotizador.nombre,
  });
}

mostrador();

identificarse.onclick = () => {
  identificacion()
}

/*console.log("Bienvenido/a a Smart Medical Group. A continuación te dejamos un listado de nuestros planes médicos en cartilla para que puedas seleccionar el que más se adecúe a tus necesidades. Estos valores no poseen el IVA agregado.");
console.table(planesSMG);

let planId = prompt ("Por favor, introduzca el número de ID del plan médico de su preferencia.");

const planEscogido = planesSMG.find((plan) => plan.id == planId);

console.log("Este es el plan de salud SMG que Ud. ha seleccionado, para continuar con la cotización ahora deberá escoger la modalidad de pago que desea seleccionar.")

if (planEscogido != undefined){
  console.log(planEscogido);;
}else{
  console.log("Ud. no ha seleccionado el ID de un plan de la cartilla SMG.");
}

modoDePago = prompt("Si desea cancelar su plan médico en un pago escriba 'de contado', si por el contrario desea cancelar el mismo en cuotas sin interés por favor escriba 'cuotas'.");

function decontado (){
  precio = planEscogido.precio * 1.21;
}

function cutoas (){
  precio = (planEscogido.precio * 1.21 * 1.30)/3;
}

if (modoDePago == "de contado"){
  decontado()
  planEscogido.precio = precio;
  console.log("El plan que Ud. ha escogido es el siguiente:","\nACLARATORIA: Precio con IVA incluido.");
  console.table(planEscogido);
}else if (modoDePago == "cuotas"){
  cutoas()
  planEscogido.precio = precio;
  console.log("El plan que Ud. ha escogido es el siguiente:", "\nACLARATORIA: El precio que verá reflejado es la cuota mensual que deberá abonar por el plan médico.", "\nEl financimiento es de 3 cuotas sin interés.");
  console.table(planEscogido);
}else{
  console.log("No ha escogido una de las modalidades predefinidas para el cotizador. Por favor reintente de nuevo con las opciones 'de contado' o 'cuotas'. Muchas gracias.")
}*/