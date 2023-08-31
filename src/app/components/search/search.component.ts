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

  title           : string  = ''   ;
  location        : string  = ''   ;
  fullTime        : boolean = false;
  placeholderTitle: string  = ''   ;
  labelCheckBox   : string  = ''   ;
  labelSearch     : string  = ''   ;
  modal: boolean = false;

  Breakpoints = Breakpoints;
  currentBreakpoint: string = '';
  readonly breakpoint$ = this.breakpointObserver
    .observe([Breakpoints.Large, Breakpoints.Medium, Breakpoints.Small, '(min-width: 500px)'])
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
    }
    else if(this.breakpointObserver.isMatched('(max-width: 1092px)')){
      this.placeholderTitle = 'Filter by title...';
      this.labelCheckBox = 'Full Time';
      this.labelSearch = 'Search';
    }
    else if(this.breakpointObserver.isMatched('(max-width: 876px)')){
      this.labelSearch = '';
    }
  }


  searchJob(){
    const parametros = {
      title: this.title,
      location: this.location,
      fullTime: this.fullTime
    };
    this.parametros.emit(parametros);

    this.title = '';
    this.location = '';
    this.fullTime = false;

  }

  showModal(){
    if (!this.modal) {
      this.modal = true;
    }
    else{
      this.modal = false;
    }
  }

}
