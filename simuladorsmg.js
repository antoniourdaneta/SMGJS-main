//Se solicita Usuario y Contraseña a la persona para registrarse en el sitio web y adquirir un plán médico a través del cotizador de SMG

//Algoritmo Condicional, Cíclico y Funciones

/*

alert("Regístrate en SMG para acceder a las cotizaciones de planes médicos.");

let mail = prompt(
  "Ingresa un correo eléctronico para asociarlo a tu cuenta SMG."
);
let user = prompt(
  "Ingresa un nombre de usuario para registrarte en Smart Medical Group."
);
let pass = prompt("Ingresa una contraseña para tu usuario en SMG.");

alert("Inicia sesión en SMG para conocer nuestros planes.");

let usuario = prompt("Ingresa tu nombre de usuario para iniciar sesión.");
let contrasenia = prompt(
  "Ingresa tu contraseña para el usuario " + usuario + "."
);

function cotizarPlanMedico() {

  let planmedico = prompt(
    "Indícanos las especialidades médicas que quisieras tener en tu plan / cartilla de Smart Medical Group. Ej: odontologia, psicologia, enfermeria, otros. Recomendamos escribirlas todas en minúsucula y sin tildes."
  );

  while (planmedico != "plansmg") {
    switch (planmedico) {
      case "odontologia":
        console.log("Odontología");
        break;
      case "enfermeria":
        console.log("Enfermería");
        break;
      case "emergencias":
        console.log("Emergencias");
        break;
      case "cirugia":
        console.log("Cirugía");
        break;
      case "cirugia bucal":
        console.log("Cirugía Bucal");
        break;
      case "psicologia":
        console.log("Psicología");
        break;
      case "gastroenterologia":
        console.log("Gastroenterología");
        break;
      case "dermatologia":
        console.log("Dermatología");
        break;
      case "cardiologia":
        console.log("Cardiología");
        break;
      case "medicina general":
        console.log("Medicina General");
        break;
      default:
        console.log("No contamos con ese servicio.");
        break;
    }
    planmedico = prompt(
      "Ingresa la especialidad médica (escribe plansmg para finalizar)."
    );
  }

  console.log(
    "Señor/a " +
      user +
      ": En base a tu selección de especialidades médicas te haremos llegar a tu correo electrónico '" +
      mail +
      "' el plan médico SMG que más se adecúe a tus preferencias. ¡Está atento/a!"
  );
}

if (usuario == user && contrasenia == pass) {
  console.log("¡Bienvenido al cotizador de planes SMG!");

cotizarPlanMedico();

} else {
  console.log(
    "Usuario y/o contraseña erróneos, por favor verifica tus datos para poder acceder al cotizador."
  );
}

*/

//ACLARATORIA: Decidí comentar el resto del código para que la lógica del desafío actual esté definida por lo que recién desarrollé y no se solape con las primeras partes.

//Lista de planes médicos

const cotizador = []
const planesSMG = [
  { id: 01,
    nombre: "PlanSMG 01",
    ubicacion: "Sanatorio SMG",
    preciodelista: 58000,
    img:"../multimedia/LOGOTIPOSMG2.jpg"
  },
  { id: 02,
    nombre: "PlanSMG 02",
    ubicacion: "Sanatorio SMG",
    preciodelista: 62000,
    img:"../multimedia/LOGOTIPOSMG2.jpg"
  },
  { id: 03,
    nombre: "PlanSMG 03",
    ubicacion: "Sanatorio SMG",
    preciodelista: 79000,
    img:"../multimedia/LOGOTIPOSMG2.jpg"
  },
  { id: 04,
    nombre: "PlanSMG 04",
    ubicacion: "Sanatorio SMG",
    preciodelista: 88000,
    img:"../multimedia/LOGOTIPOSMG2.jpg"
  },
  { id: 05,
    nombre: "PlanSMG 01 - Exclusive",
    ubicacion: "Sanatorio SMG Exclusive",
    preciodelista: 128000,
    img:"../multimedia/LOGOTIPOSMG2.jpg"
  },
  { id: 06,
    nombre: "PlanSMG 02 - Exclusive",
    ubicacion: "Sanatorio SMG Exclusive",
    preciodelista: 142000,
    img:"../multimedia/LOGOTIPOSMG2.jpg"
  },
  { id: 07,
    nombre: "PlanSMG 03 - Exclusive",
    ubicacion: "Sanatorio SMG Exclusive",
    preciodelista: 167000,
    img:"../multimedia/LOGOTIPOSMG2.jpg"
  },
  { id: 08,
    nombre: "PlanSMG 04 - Exclusive",
    ubicacion: "Sanatorio SMG Exclusive",
    preciodelista: 188000,
    img:"../multimedia/LOGOTIPOSMG2.jpg"
  },
]

//Funciones 
//Función para identificarse

function identificacion(){
  localStorage.setItem("usuario", prompt("Hola, bienvenido, ¿puede indicarnos su nombre?"))
}

// Función para cotizar el plan médico
function item(nombre, id, preciodelista){
  this.nombre = prompt("Inserta el nombre del Plan Médico: ", nombre),
  this.id = prompt("Ingresa el ID del Plán Médico: ", id),
  this.preciodelista = parseFloat(prompt("Introduce el precio de lista del plan: ", preciodelista));
}

let planesMedicos = document.getElementById("planes");
function mostrador(){
    for(const plan of planesSMG){
      planesMedicos.className="card col-md-3"
        planesMedicos.innerHTML += `
        <div class="card a2 botones">
          <img
            src="${plan.img}"
            class="card-img-top"
            alt="${plan.nombre}"
          />
            <div class="card-body">
              <h4 class="card-title">${plan.nombre}</h4>
              <h5>Precio de lista: $${plan.preciodelista}</h5>
      
              <button
                type="button"
                class="btn btn-primary fondoBoton botones2"
                data-bs-toggle="modal"
                data-bs-target="#p1${plan.id}"
              >
                Agregar al cotizador
              </button>
      
              <!-- despliegue del cuadro flotante -->
              <div
                class="modal fade"
                id="p1${plan.id}"
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
                        src="${plan.img}"
                        class="card-img-top"
                        alt="${plan.nombre}"
                      />
                      <h4 class="card-title">${plan.nombre}</h4>
                      <h5>$ ${plan.preciodelista}</h5>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary fondoBoton botones2"
                        data-bs-dismiss="modal"
                      >
                        Cancelar
                      </button>
                      <button id='AC${plan.id}' type="button" class="btn btn-primary fondoBoton">
                        Cotizar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
          </div>
      </div>
        `;;
    }

    planesSMG.forEach((plan)=>{
        document.getElementById(`AC${plan.id}`).addEventListener("click",function(){
            agregarAlCotizador(plan);
        });
    });
}

//Función para agregar al cotizador
function agregarAlCotizador(planAgregadoAlCotizador){
  if (localStorage.getItem("usuario") === "null" | localStorage.getItem("usuario") === ""){
    localStorage.setItem("usuario", prompt("Hola, bienvenido, ¿puede indicarnos su nombre?"))
  }else{
  cotizador.push(planAgregadoAlCotizador)
  console.table(cotizador)
  alert("Se agrego el "+planAgregadoAlCotizador.nombre+ " al cotizador de Planes Médicos SMG, ¡muchas gracias "+localStorage.getItem("usuario")+"!")
  }
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