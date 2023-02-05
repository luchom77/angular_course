import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/Persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css'],
})
export class PersonasComponent implements OnInit {
  //atributos
  personas: Persona[] = [];

  //constructor
  constructor(private personaService: PersonaService) {}

  //comportamiento o metodos

  ngOnInit(): void {
    this.getAllPersonas();
  }

  getAllPersonas(): void {
    this.personas = this.personaService.getAllPersonas();
  }

  borrarPersonaDeLista(personaParaBorrar: Persona) {
    this.personas = this.personaService.removePersona(
      this.personas,
      personaParaBorrar
    );
  }
}
