import { Component, OnInit } from '@angular/core';
import { TOPICS } from "../../../mocks/topics";
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-grid-box',
  templateUrl: './grid-box.component.html',
  styleUrls: ['./grid-box.component.scss']
})
export class GridBoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
public topics = TOPICS;
}
