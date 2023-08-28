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
  limit = 12;
  offset = 0;
  btnDisabled: boolean = false;

  constructor(private jobsService: JobsService){}

  ngOnInit(){
    this.jobsService.getJobs(this.limit, this.offset).subscribe(jobs => {
      this.jobs = jobs;
      this.offset += this.limit;
    })
  }

  loadMore(){
    if(this.offset > this.jobs.length){
      this.btnDisabled = true;
    }
    else{
      this.jobsService.getJobs(this.limit, this.offset).subscribe(jobs => {
        this.jobs = this.jobs.concat(jobs);
        this.offset +=  this.limit;
      })
    }

  }
}
