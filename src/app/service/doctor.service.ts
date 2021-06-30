import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './baseurl';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http:HttpClient) { }

  public getalldoc()
  {
    return this.http.get(`${baseurl}/doctor/getall`)
  }

  public getallpat()
  {
    return this.http.get(`${baseurl}/patient/getall`)
  }
}
