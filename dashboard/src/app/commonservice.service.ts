import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  constructor(private http:HttpClient) { }

   
  login(obj:any) {
    return this.http.post('https://reqres.in/api/login',obj);
    
  }
}
