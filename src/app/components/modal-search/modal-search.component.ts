import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-search',
  templateUrl: './modal-search.component.html',
  styleUrls: ['./modal-search.component.css']
})
export class ModalSearchComponent{

  @Output() parametros = new EventEmitter<any>();
  @Input() modal = false;

  location: string = '';
  fullTime: boolean = false;

  searchJob(){
    const parametros = {
      location: this.location,
      fullTime: this.fullTime,
      modal: false
    };
    this.parametros.emit(parametros)
    this.modal = false;
  }
}
