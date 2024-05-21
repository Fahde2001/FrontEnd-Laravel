import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentApiBackEndService {

  constructor(private http:HttpClient) { }
  url='http://localhost:8000';
  //add New Student
  addStudent(credentials:any):Observable<any>{
    const token = localStorage.getItem('token');
    const idSupplyChaine=localStorage.getItem('SupplyChianeId');
    if (token) {
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
        });
        return this.http.post<any>(`${this.url}/api/student/add/${idSupplyChaine}`,credentials, { headers: headers });
    } else {
        console.error('Student ERROR');
        return throwError('Student ERROR');
    }
  }
  //Get All Student
  getStudent():Observable<any>{
    const token = localStorage.getItem('token');
    const idSupplyChaine=localStorage.getItem('SupplyChianeId');
    if (token) {
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
        });
        return this.http.get<any>(`${this.url}/api/student/all/${idSupplyChaine}`, { headers: headers });
    } else {
        console.error('Get Student ERROR');
        return throwError('Get Student ERROR');
    }
  }

  //Update Student 
  updateStudent(credentials:any,idStudent:number):Observable<any>{
    const token = localStorage.getItem('token');
    const idSupplyChaine=localStorage.getItem('SupplyChianeId');
    if (token) {
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
        });
        return this.http.put<any>(`${this.url}/api/student/update/${idStudent}`,credentials, { headers: headers });
    } else {
        console.error('Update Student ERROR');
        return throwError('Update Student ERROR');
    }
  }

  //delete Student
  deleteStudent(idStudent:any):Observable<any>{
    const token = localStorage.getItem('token');
    if (token) {
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
        });
        return this.http.delete<any>(`${this.url}/api/student/delete/${idStudent}`, { headers: headers });
    } else {
        console.error('Delete Student ERROR');
        return throwError('Delete Student ERROR');
    }
  }
}
