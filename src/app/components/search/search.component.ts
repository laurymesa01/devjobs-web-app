import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { distinctUntilChanged, tap } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  @Output() parametros = new EventEmitter<any>();
  @Output() modalSearch = new EventEmitter<boolean>();

  title           : string  = ''   ;
  location        : string  = ''   ;
  fullTime        : boolean = false;
  placeholderTitle: string  = ''   ;
  labelCheckBox   : string  = ''   ;
  labelSearch     : string  = ''   ;
  modal: boolean = false;
  parameters = {}

  Breakpoints = Breakpoints;
  readonly breakpoint$ = this.breakpointObserver
    .observe(['(min-width: 1092px)', '(max-width: 1092px)', '(max-width: 840px)'])
    .pipe(
      tap(value => console.log(value)),
      distinctUntilChanged()
    );

  constructor(private breakpointObserver: BreakpointObserver){}

  ngOnInit() {
    this.breakpoint$.subscribe(() =>
    this.breakpointChanged()
    );

  }

  private breakpointChanged(){
    if (this.breakpointObserver.isMatched('(min-width: 1092px)')) {
      this.placeholderTitle = 'Filter by title, companies, expertise…';
      this.labelCheckBox = 'Full Time Only';
      this.labelSearch = 'Search';
      this.modal = false;
    }
    else if(this.breakpointObserver.isMatched('(max-width: 840px)')){
      this.labelSearch = '';
      this.placeholderTitle = 'Filter by title...';
    }
    else if(this.breakpointObserver.isMatched('(max-width: 1092px)')){
      this.placeholderTitle = 'Filter by title...';
      this.labelCheckBox = 'Full Time';
      this.labelSearch = 'Search';
      this.modal = false;
    }
  }


  searchJob(event?: any){
    if (event) {
      this.parameters = {
        title: this.title,
        location: event.location,
        fullTime: event.fullTime
      };
      this.modal = event.modal;
      this.placeholderTitle = 'Filter by title...'
    }else {
      this.parameters = {
        title: this.title,
        location: this.location,
        fullTime: this.fullTime
      };
    }

    this.parametros.emit(this.parameters);

    this.title = '';
    this.location = '';
    this.fullTime = false;

  }

  showModal(){
    if (!this.modal) {
      this.modal = true;
      this.placeholderTitle = 'Enter job desc...'
    }

  }

}
