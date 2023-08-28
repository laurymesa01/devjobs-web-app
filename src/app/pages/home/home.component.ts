import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobsService } from '../../services/jobs.service';
import { map } from 'rxjs';
import { Job } from 'src/app/interfaces/job.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  jobs: Job[] = []

  constructor(public router: Router,
              private jobsService: JobsService){

  }

  ngOnInit(){
  }

  changeMode(){
      document.documentElement.classList.toggle('dark');
  }

  searchJob(parametros: any){
    this.jobsService.searchJobs(parametros).subscribe(jobs => {
      this.jobs = jobs
      console.log(this.jobs);

    })
  }
}
