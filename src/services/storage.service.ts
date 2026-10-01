/**
 * Servicio genérico para gestionar la persistencia en LocalStorage.
 * Debe ser implementado por el alumno.
 */
export class StorageService<T> {
    private key: string;

    constructor(key: string) {
        this.key = key;
    }

    // Recupera todos los elementos del almacén
    public getAll(): T[] {
        const data = localStorage.getItem(this.key);
        return data ? JSON.parse(data) : [];
    }

    // Guarda una lista completa de elementos
    public saveAll(items: T[]): void {
        localStorage.setItem(this.key, JSON.stringify(items));
    }

    // Añade un único elemento a la colección existente
    public add(item: T): void {
        const items = this.getAll();
        items.push(item);
        this.saveAll(items);
    }
}
