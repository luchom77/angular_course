import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/Persona';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css'],
})
export class PersonasComponent implements OnInit {
  //atributos
  personas: Persona[] = [];

  //constructor
  constructor() {}

  //comportamiento o metodos

  ngOnInit(): void {
    let persona1 = new Persona('Lucho', 'Moore', 27);
    this.personas.push(persona1);
    this.personas.push(new Persona('Alejandro', 'Dolina', 62));
    this.personas.push(new Persona('Nicky', 'Nicole', 22));
  }
}
