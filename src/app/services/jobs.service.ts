import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from '../interfaces/job.interface';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  private url: string = 'https://json-server-jobs.vercel.app';

  constructor(private http: HttpClient) { }

  getJobs(limit: number, offset: number): Observable<Job[]>{
    return this.http.get<Job[]>(`${this.url}/jobs?_limit=${limit}&_start=${offset}`);
  }

  getJobById(id: string): Observable<Job> {
    return this.http.get<Job>(`${this.url}/jobs/${id}`);
  }

  searchJobs(parametros: any){
    if (parametros.fullTime) {
      return this.http.get<Job[]>(`${this.url}/jobs?position_like=${parametros.title}&location_like=${parametros.location}&contract_like=full`);
    }
    return this.http.get<Job[]>(`${this.url}/jobs?position_like=${parametros.title}&location_like=${parametros.location}`);
  }

}
