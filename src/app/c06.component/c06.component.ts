/**
*  Document:  c06.component.ts
*
*  Author:    andreas.benz.development@outlook.de
*
*  Owner:     andreas.benz.development@outlook.de
*
*  History:
*
*  20.06.19 initial build
*/
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-c06',
  templateUrl: './c06.component.html',
  styleUrls: ['./c06.component.scss']
})
export class C06Component implements OnInit {
    public description: String = "Wir entwickeln Lösungen für die Etablierung einer Ressourcen-basierten Ökonomie und bringen Mensch, Technologie sowie Umwelt in Einklang.";

  constructor() { }

  ngOnInit() {
  }

}