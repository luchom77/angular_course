import { Injectable } from '@angular/core';
import { Persona } from '../models/Persona';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  personas: Persona[] = [];

  constructor() {}

  getAllPersonas(): Persona[] {
    let persona1 = new Persona('Lucho', 'Moore', 27);
    this.personas.push(persona1);
    this.personas.push(new Persona('Alejandro', 'Dolina', 62));
    this.personas.push(new Persona('Nicky', 'Nicole', 22));

    return this.personas;
  }

  //solo un ejemplo de los servicios que se pueden ofrecer

  removePersona(
    listaDePersonas: Persona[],
    personaToDelete: Persona
  ): Persona[] {
    return listaDePersonas.filter((p) => p.nombre !== personaToDelete.nombre);
  }
}
