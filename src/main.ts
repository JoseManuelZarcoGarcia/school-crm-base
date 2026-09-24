import { CRMController } from "./controllers/crm.controller";
import type { Usuario } from "./models/interfaces";

//Instanciamos el motor (creamos el objeto en memoria)
const miEscuelaCRM = new CRMController("1.0.0");

//Usamo sus metodos
const alumnos = miEscuelaCRM.filtrarUsuarioPorRol("alumno");
//miEscuelaCRM.usuariosDelCentro=[];
const profesores = miEscuelaCRM.filtrarUsuarioPorRol("profesor");
console.log("Profesores del centro: ",profesores);

console.log("Ver version ",miEscuelaCRM.verVersion());

const nuevoUsuarioErroneo:  Usuario = { id: 1, nombre: 'Ana Martínez', rol: 'profesor', activo: true };
miEscuelaCRM.agregarUsuario(nuevoUsuarioErroneo);

const nuevoUsuarioCorrecto:  Usuario = { id: 45, nombre: 'Ana Martínez', rol: 'profesor', activo: true };
miEscuelaCRM.agregarUsuario(nuevoUsuarioCorrecto);
