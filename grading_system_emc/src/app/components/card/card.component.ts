import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-small',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() title : string = "";
  @Input() value : string = "";
  @Input() content : string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
