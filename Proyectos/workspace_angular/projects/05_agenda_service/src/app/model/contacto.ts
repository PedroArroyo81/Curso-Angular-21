export class Contacto {
  constructor(
    public nombre?: string,
    public telefono?: string,
    public edad?: number
  ) { }

  public getNombre(): string {
    return this.nombre;
  }
  public getTelefono(): string {
    return this.telefono;
  }
  public getEdad(): number {
    return this.edad;
  }
  public setNombre(nom: string) {
    this.nombre = nom;
  }
  public setTelefono(tel: string) {
    this.telefono = tel;
  }
  public setEdad(eda: number) {
    this.edad = eda;
  }
}
