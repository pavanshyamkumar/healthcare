import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './baseurl';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http:HttpClient) { }

  public check(getdata:any)
  {
    return this.http.post(`${baseurl}/appointment/check`,getdata);
  }

  public saveappotintment(saveappdata:any)
  {
    return this.http.post(`${baseurl}/appointment/save`,saveappdata);
  }

  public getappointments(id:any)
  {
    return this.http.get(`${baseurl}/appointment/patient/${id}`);
  }

  public getappointmentsofdoc(id:any)
  {
    return this.http.get(`${baseurl}/appointment/doctor/${id}`);
  }

  public getall()
  {
    return this.http.get(`${baseurl}/appointment/getall`)
  }

  public del(id:any)
  {
    return this.http.delete(`${baseurl}/appointment/del/${id}`);
  }

  public getbyid(id:any)
  {
    return this.http.get(`${baseurl}/appointment/${id}`);
  }

  public update(getdata:any)
  {
    return this.http.put(`${baseurl}/appointment/`,getdata);
  }
}
