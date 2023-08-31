import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { JobsService } from '../../services/jobs.service';
import { Job } from '../../interfaces/job.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{

  @Output() onLoadMore: EventEmitter<any> = new EventEmitter<any>();
  @Input() jobs: Job[] = [];
  @Input() btnDisabled: boolean = false;

  constructor(){}

  loadMore(){
    this.onLoadMore.emit();
  }
}
