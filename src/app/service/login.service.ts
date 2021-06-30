import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './baseurl';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }


  public generate(logindata:any)
  {
    return this.http.post(`${baseurl}/generate-token`,logindata);
  }

  public currentuser()
  {
    return this.http.get(`${baseurl}/current-user`)
  }



  public loginuser(token:any){
      localStorage.setItem("token",token);
      return true;
  }
  public islogin(){
    let tokenstr=this.gettoken();
    if(tokenstr== undefined || tokenstr=='' || tokenstr==null){
      return false;
    }
    else{
      return true;
    }
  }

  public islogout(){
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return true;
  }

  public gettoken(){
    return localStorage.getItem("token");
  }

  public setuser(user:any){
    localStorage.setItem("user",JSON.stringify(user));
  }

  public getuser(){
    let k= localStorage.getItem("user");
    if(k!=null){
      return JSON.parse(k);
    }
    else{
      this.islogout();
      return null;
    }
  }

  public getrole(){
    let m=this.getuser();
    return m.authorities[0].authority;
  }

}
