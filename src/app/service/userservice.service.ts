
import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import baseurl from './baseurl';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }

public createdoc(getdata:any)
{
  return this.http.post(`${baseurl}/user/createuserdoc`,getdata);
}

public createpat(getdata:any){
  return this.http.post(`${baseurl}/user/createuserpat`,getdata);
}

  public createuser(getdata:any)
  {
    return this.http.post(`${baseurl}/user/createuserpat`,getdata);
  }

  public allusers()
  {
    return this.http.get(`${baseurl}/user/showall`);
  }

  public deleteuser(id:any){
    return this.http.delete(`${baseurl}/user/delete/${id}`);
  }

  public detetedoctor(id:any){
    return this.http.delete(`${baseurl}/doctor/${id}`);
  }

  public deletepat(id:any)
  {
    return this.http.delete(`${baseurl}/patient/${id}`);
  }

  public getdata(id:any){
    return this.http.get(`${baseurl}/user/${id}`);

  }

  public update(updatedata:any)
  {
    return this.http.put(`${baseurl}/doctor/`,updatedata);
  }

  public getdocidid(id:any)
  {
    return this.http.get(`${baseurl}/doctor/${id}`); 
  }

  public updateprofile(updatedata:any)
  {
    return this.http.put(`${baseurl}/user/update`,updatedata);
  }
  
}
