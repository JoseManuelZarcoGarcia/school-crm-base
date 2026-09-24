import type { Usuario , Rol } from "../models/interfaces";

export class CRMController {

    //Propiedades
    private usuariosDelCentro: Usuario[] = [];
    // como no podemos hecer const por el private, lo hacemos read only
    private readonly CLAVE_STORAGE = 'school_crm_usuarios';


    //Constructor
    constructor(public version: string) {
        const datosLocales = localStorage.getItem(this.CLAVE_STORAGE);
        if (datosLocales){
            this.usuariosDelCentro = JSON.parse(datosLocales);
        } else{
            this.usuariosDelCentro = [
            { id: 1, nombre: 'Ana Martínez', rol: 'profesor', activo: true },
            { id: 2, nombre: 'Carlos Soler', rol: 'alumno', activo: true },
            { id: 3, nombre: 'Lucía Gómez', rol: 'admin', activo: true },
            { id: 4, nombre: 'Ana Martínez', rol: 'profesor', activo: false },
            { id: 5, nombre: 'Carlos Soler', rol: 'alumno', activo: true },
            { id: 6, nombre: 'Lucía Gómez', rol: 'alumno', activo: false }
        ];
        }
        
    }


    //Métodos: Es la funcion de ayer, que estaba en counter, convertida en un método o habilidad de la clase
     filtrarUsuarioPorRol( rolBuscado: Rol): Usuario[] {
        //Usamos this para referirnos a la propiedad usuariosDesCentro de esta misma clase
       return this.usuariosDelCentro.filter(usuario => usuario.rol === rolBuscado);
     }

     actualizarVersion(nuevaVersion: string): void{
        this.version = nuevaVersion;
     }

     verVersion(): string{
        return this.version;
     }

    public agregarUsuario(nuevoUsuario: Usuario): void{
        const idDuplicado = this.usuariosDelCentro.find(usuario => usuario.id === nuevoUsuario.id);
        if(idDuplicado){
            console.log("Este usuario ya existe");
        this.guradarEnDisco();
        }
        else{
            this.usuariosDelCentro.push(nuevoUsuario);
            console.log("Este usuario ha sido agregado");
        }
        
     }


     private guradarEnDisco(): void{
        localStorage.setItem(this.CLAVE_STORAGE, JSON.stringify(this.usuariosDelCentro)); 
     }
}