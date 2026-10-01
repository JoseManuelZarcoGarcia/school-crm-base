import type {
    Asistencia,
    Sancion,
    RegistroHorario,
    EstadoAsistencia,
    TipoSancion,
    DiaSemana,
    FranjaHoraria
} from '../models/interfaces';

import { StorageService } from '../services/storage.service';

export class CRMController {

    private readonly asistenciaStorage =
        new StorageService<Asistencia>('crm_asistencias');

    private readonly sancionesStorage =
        new StorageService<Sancion>('crm_sanciones');

    private readonly horariosStorage =
        new StorageService<RegistroHorario>('crm_horarios');

    /**
     * Simula una petición de red.
     */
    private simularRed(): Promise<void> {
        return new Promise((resolve) => {
            setTimeout(resolve, 500);
        });
    }

    /**
     * Registra una asistencia.
     */
    public async registrarAsistencia(
        alumnoId: string,
        profesorId: string,
        franja: FranjaHoraria,
        estado: EstadoAsistencia
    ): Promise<boolean> {

        await this.simularRed();

        const asistencia: Asistencia = {
            id: crypto.randomUUID(),
            alumnoId,
            profesorId,
            fecha: new Date()
                .toISOString()
                .split('T')[0],
            franja,
            estado
        };

        this.asistenciaStorage.add(asistencia);

        return true;
    }

    /**
     * Registra una sanción.
     */
    public async registrarSancion(
        alumnoId: string,
        profesorId: string,
        tipo: TipoSancion,
        descripcion: string
    ): Promise<void> {

        await this.simularRed();

        const sancion: Sancion = {
            id: crypto.randomUUID(),
            alumnoId,
            profesorId,
            fecha: new Date()
                .toISOString()
                .split('T')[0],
            tipo,
            descripcion
        };

        this.sancionesStorage.add(sancion);
    }

    /**
     * Comprueba si un profesor tiene conflicto horario.
     */
    public async comprobarConflictoProfesor(
        profesorId: string,
        dia: DiaSemana,
        franja: FranjaHoraria
    ): Promise<boolean> {

        await this.simularRed();

        const horarios: RegistroHorario[] =
            this.horariosStorage.getAll();

        return horarios.some(
            (horario: RegistroHorario) =>
                horario.profesorId === profesorId &&
                horario.dia === dia &&
                horario.franja === franja
        );
    }

    /**
     * Genera el informe de un alumno.
     */
    public async obtenerInformeAlumno(
        alumnoId: string
    ): Promise<{
        faltas: number;
        retrasos: number;
        sanciones: number;
    }> {

        await this.simularRed();

        const asistencias: Asistencia[] =
            this.asistenciaStorage.getAll();

        const sanciones: Sancion[] =
            this.sancionesStorage.getAll();

        const faltas: number =
            asistencias.filter(
                (asistencia: Asistencia) =>
                    asistencia.alumnoId === alumnoId &&
                    asistencia.estado === 'falta'
            ).length;

        const retrasos: number =
            asistencias.filter(
                (asistencia: Asistencia) =>
                    asistencia.alumnoId === alumnoId &&
                    asistencia.estado === 'retraso'
            ).length;

        const totalSanciones: number =
            sanciones.filter(
                (sancion: Sancion) =>
                    sancion.alumnoId === alumnoId
            ).length;

        return {
            faltas,
            retrasos,
            sanciones: totalSanciones
        };
    }
}