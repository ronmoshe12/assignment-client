import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CardButton} from "../../../types/card-button.model";
import {Car} from "../../../types/car.model";

@Component({
  selector: 'app-general-card',
  templateUrl: './general-card.component.html',
  styleUrls: ['./general-card.component.scss']
})
export class GeneralCardComponent implements OnInit {
  @Input() cardData: Car | undefined;
  @Output() edit = new EventEmitter<Car>();
  @Output() delete = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

}
