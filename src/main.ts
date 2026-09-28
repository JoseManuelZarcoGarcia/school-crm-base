import {CRMController} from './controllers/crm.controller';

// Instanciamos el motor (creamos el objeto en memoria)
const miEscuelaCRM = new CRMController("1.0.0");


 async function addUsuario() {
    console.log("Agregando un nuevo usuario...");
    let guardaConExito =  false;
    guardaConExito = await miEscuelaCRM.registrarUsuarioAsync({ id: 4, nombre: "Ana Torres", rol: "alumno", activo: true });
    if (guardaConExito) {
        console.log("Usuario agregado con éxito.");
    } else {
        console.log("Error al agregar el usuario.");
    }
}

addUsuario();

console.log("Versión del CRM:", miEscuelaCRM.verVersion());
// Usamos sus métodos
const profesores = miEscuelaCRM.filtrarUsuariosPorRol("profesor");


console.log("Profesores del centro:", profesores);

