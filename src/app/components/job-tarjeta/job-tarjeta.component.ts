import { Component, Input } from '@angular/core';
import { Job } from 'src/app/interfaces/job.interface';

@Component({
  selector: 'app-job-tarjeta',
  templateUrl: './job-tarjeta.component.html',
  styleUrls: ['./job-tarjeta.component.css']
})
export class JobTarjetaComponent {

  @Input() job!: Job;


}
