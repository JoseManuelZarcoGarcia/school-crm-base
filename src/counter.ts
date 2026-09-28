/* export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `Count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
 */


import type {Usuario, Rol} from './models/interfaces';

export function filtrarUsuariosPorRol(usuarios: Usuario[], rol: Rol, activo: boolean): Usuario[] {
    return usuarios.filter(usuario => usuario.rol === rol && usuario.activo === activo);
}

export function devuelveAlumno(usuariosDelCentro: Usuario[], id: number): Usuario | undefined {
  return usuariosDelCentro.find(usuario => usuario.id === id && usuario.rol === 'alumno');
} 