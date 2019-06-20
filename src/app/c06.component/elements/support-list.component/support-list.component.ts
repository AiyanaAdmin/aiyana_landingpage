import { Component, OnInit } from '@angular/core';
import { PARTNERS } from "../../../mocks/partners";

@Component({
  selector: 'app-support-list',
  templateUrl: './support-list.component.html',
  styleUrls: ['./support-list.component.scss']
})
export class SupportListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
public partners = PARTNERS;
}
