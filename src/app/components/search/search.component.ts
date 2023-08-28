import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { CheckboxControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @Output() parametros = new EventEmitter<any>();

  title   : string = '';
  location: string = '';
  fullTime: boolean = false;


  searchJob(){
    const parametros = {
      title: this.title,
      location: this.location,
      fullTime: this.fullTime
    };

    this.parametros.emit(parametros);

  }

}
