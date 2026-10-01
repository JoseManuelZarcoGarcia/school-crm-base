export type RolUsuario = 'admin' | 'profesor' | 'alumno';
export type EstadoAsistencia = 'presente' | 'falta' | 'retraso' | 'justificada';
export type TipoSancion = 'comportamiento' | 'expulsion';
export type DiaSemana = 'Lunes' | 'Martes' | 'Miércoles' | 'Jueves' | 'Viernes';
export type FranjaHoraria = '1ª Hora' | '2ª Hora' | '3ª Hora' | 'Recreo' | '4ª Hora' | '5ª Hora' | '6ª Hora';

export interface Usuario {
    id: string;
    nombre: string;
    apellidos: string;
    email: string;
    rol: RolUsuario;
}

export interface Asignatura {
    id: string;
    nombre: string;
    codigo: string;
}

export interface Curso {
    id: string;
    nombre: string; // Ej: "2º DAW"
    tutorId: string; // ID del Profesor
}

export interface RegistroHorario {
    dia: DiaSemana;
    franja: FranjaHoraria;
    cursoId: string;
    asignaturaId: string;
    profesorId: string;
    aula: string;
}

export interface Asistencia {
    id: string;
    alumnoId: string;
    profesorId: string;
    fecha: string; // Formato YYYY-MM-DD
    franja: FranjaHoraria;
    estado: EstadoAsistencia;
}

export interface Sancion {
    id: string;
    alumnoId: string;
    profesorId: string;
    fecha: string;
    tipo: TipoSancion;
    descripcion: string;
}
