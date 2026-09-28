export type Rol = 'admin' | 'profesor' | 'alumno';

export interface Usuario {
    id: number;
    nombre: string;
    rol: Rol;
    activo: boolean;
    tieneCoche?: string; // Almacenar marca del coche
}