/**
*  Document:  timeline-item.component.ts
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
import { TARGETS } from 'src/app/mocks/targets';


@Component({
  selector: 'timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.scss']
})
export class TimelineItemComponent implements OnInit {
public targets = TARGETS;
   
  constructor() { }

  ngOnInit() {
  }

}