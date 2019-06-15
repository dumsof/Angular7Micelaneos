import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styles: []
})
export class NgSwitchComponent implements OnInit {
  @Input() alerta: string;
  constructor() { }

  ngOnInit() {
  }

}
