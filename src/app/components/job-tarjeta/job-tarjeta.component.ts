import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job } from 'src/app/interfaces/job.interface';

@Component({
  selector: 'app-job-tarjeta',
  templateUrl: './job-tarjeta.component.html',
  styleUrls: ['./job-tarjeta.component.css']
})
export class JobTarjetaComponent implements OnInit{

  @Input() job!: Job;

  constructor(private activatedRoute: ActivatedRoute){}

  ngOnInit(){
  }


}
