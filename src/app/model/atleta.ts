import {Persona} from './persona'

export class Atleta extends Persona {
    estatura: number

    constructor(nombre: string, peso: number, estatura: number) {
        super(nombre, peso)
        this.estatura = estatura
    }

    calcularIMC(): string {
        const imc = this.peso / (this.estatura ** 2)

        let interpretacion: string

        if (imc < 18.5) {
            interpretacion = 'Bajo peso'
        } else if (imc >= 18.5 && imc < 24.9) {
            interpretacion = 'Peso normal'
        } else if (imc >= 24.9 && imc < 29.9) {
            interpretacion = 'Sobrepeso'
        } else {
            interpretacion = 'Obesidad'
        }

        return `El IMC de ${this.nombre} es ${imc.toFixed(2)}: ${interpretacion}`

        }
    }
