import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { JobsService } from '../../services/jobs.service';
import { Contract, Job } from 'src/app/interfaces/job.interface';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit{

  job: Job = {
    id: 0,
    company: '',
    logo: '',
    logoBackground: '',
    position: '',
    postedAt: '',
    contract: Contract.Freelance,
    location: '',
    website: '',
    apply: '',
    description: '',
    requirements: {
      content: '',
      items: []
    },
    role: {
      content: '',
      items: []
    },
  }

  constructor(private activatedRoute: ActivatedRoute,
              private jobsService: JobsService,){
  }

  ngOnInit() {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.jobsService.getJobById(id)))
      .subscribe((job) =>{
        this.job = job;
      })
  }

}
