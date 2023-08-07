import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../services/jobs.service';
import { Job } from '../../interfaces/job.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit{

  jobs: Job[] = [];

  constructor(private jobsService: JobsService){}

  ngOnInit(){
    this.jobsService.getJobs().subscribe(jobs => {
      this.jobs = jobs;
    })
  }
}
