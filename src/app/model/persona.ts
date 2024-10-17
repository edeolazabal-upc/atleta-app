export class Persona {
  constructor (public nombre: string, public peso: number) {}

  caminar() {
    this.peso = Math.max(0, this.peso -1)
  }
  comer() {
    this.peso += 2
  }
}
