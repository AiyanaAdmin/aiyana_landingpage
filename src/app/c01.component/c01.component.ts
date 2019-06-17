/**
*  Document:  c01.component.ts
*
*  Author:    andreas.benz.development@outlook.de
*
*  Owner:     andreas.benz.development@outlook.de
*
*  History:
*
*  03.05.19 initial build
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c01',
  templateUrl: './c01.component.html',
  styleUrls: ['./c01.component.scss']
})
export class C01Component implements OnInit {
public title: String = "AIYANA";
public content: String = "";
public description: String = "Wir entwickeln Lösungen für die Etablierung einer Ressourcen-basierten Ökonomie und bringen Mensch, Technologie sowie Umwelt in Einklang.";

  constructor() { }

  ngOnInit() {
  }

}
