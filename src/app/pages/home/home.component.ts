import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobsService } from '../../services/jobs.service';
import { Job } from 'src/app/interfaces/job.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  jobs: Job[] = [];
  limit = 12;
  offset = 0;
  btnDisabled: boolean = false;

  constructor(public router: Router,
              private jobsService: JobsService){

  }

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

  searchJob(parametros: any){
    this.jobsService.searchJobs(parametros).subscribe(jobs => {
      this.jobs = jobs;
    })
  }
}
