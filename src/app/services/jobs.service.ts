import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from '../interfaces/job.interface';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  private url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getJobs(): Observable<Job[]>{
    return this.http.get<Job[]>(`${this.url}/jobs`);
  }
}
