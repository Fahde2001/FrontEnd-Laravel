import { login } from './../class/Login';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BackEndApiService {
  url='http://localhost:8000';
  constructor(private http:HttpClient) { }
  //login
  login(credentials:login):Observable<any>{
    console.log(credentials);
    return this.http.post<login>(`${this.url}/api/login`,credentials);
  }
  //register
  register(name:string,email:string,password:string):Observable<any>{
    const paylod={name,email,password}
      return this.http.post<any>(`${this.url}/api/register`,paylod);
  }
  //List all suplly chias related with user
  ListSupplyChain(): Observable<any> {
    const token = localStorage.getItem('token');
    if (token) {
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
        });

        return this.http.get<any>(`${this.url}/api/supplychain/all`, { headers: headers });
    } else {
        console.error('Token not found in local storage.');
        return throwError('Token not found');
    }
  }
  //add supply chaine
  AddSupplyChian(name:string):Observable<any>{
    const token = localStorage.getItem('token');
    if (token) {
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
        });

        return this.http.post<any>(
          `${this.url}/api/supplychain`,
          { name: name }, 
          { headers: headers }
      );
    } else {
        console.error('methode Add supply Is not successful');
        return throwError('methode Add suplly Is not successful');
    }
  }
  
  //Update supply chaine
  UpdateSupllyChine(id:any,name:string):Observable<any>{
    const token = localStorage.getItem('token');
    if (token) {
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
        });

        return this.http.put<any>(
          `${this.url}/api/supplychain/update/${id}`,
          { name: name }, 
          { headers: headers }
      );
    } else {
        console.error('methode update Is not successful');
        return throwError('methode updtae Is not successful');
    }
  }

  //Delete Supply chine
  deleteSupllyChine(id:any):Observable<any>{
    const token = localStorage.getItem('token');
    if (token) {
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
        });

        return this.http.delete<any>(
          `${this.url}/api/supplychain/delete/${id}`,
          { headers: headers }
      );
    } else {
        console.error('methode Delete Is not successful');
        return throwError('methode Delete Is not successful');
    }
  }
}
