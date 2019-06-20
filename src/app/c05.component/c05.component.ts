/**
*  Document:  c05.component.ts
*
*  Author:    andreas.benz.development@outlook.de
*
*  Owner:     andreas.benz.development@outlook.de
*
*  History:
*
*  17.06.19 initial build
*/
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-c05',
  templateUrl: './c05.component.html',
  styleUrls: ['./c05.component.scss']
})
export class C05Component implements OnInit {
    public description: String = "Wir entwickeln Lösungen für die Etablierung einer Ressourcen-basierten Ökonomie und bringen Mensch, Technologie sowie Umwelt in Einklang.";

  constructor() { }

  ngOnInit() {
  }

}