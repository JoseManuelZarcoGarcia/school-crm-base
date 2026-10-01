import { CRMController } from './controllers/crm.controller';

const crm = new CRMController();

async function ejecutarPrueba() {
    console.log("=== Iniciando simulación de SchoolCRM ===");
    
    try {
        // Aquí el alumno añadirá llamadas de prueba para demostrar 
        // que sus métodos asíncronos y validaciones funcionan por consola.
        
        // Ejemplo de flujo esperado:
        // const conflicto = await crm.comprobarConflictoProfesor('prof1', 'Lunes', '1ª Hora');
        // console.log(`¿Hay conflicto horario?: ${conflicto}`);
        
    } catch (error) {
        console.error("Error en la ejecución:", error);
    }
}

ejecutarPrueba();