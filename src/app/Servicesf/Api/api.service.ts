import { Injectable } from '@angular/core';
import{SProducI} from '../../Modelsf/MProduct.interface'
import {HttpClient,HttpHeaders}from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

url:string ="https://localhost:7104/api/";

  constructor(private http:HttpClient) { }

  GetProducts():Observable<SProducI[]>{
    let direccion = this.url + "Producto/Listproduct";
      return this.http.get<SProducI[]>(direccion);

  }
  // GetStudentn(id:string):Observable<SProduct>{
  //   let direccion = this.url + "Student/ByStudent/";
  //   console.log(direccion);
  //   return this.http.get<SProduct>(direccion);
  // }
  // Updatestuden(stude:SProduct):Observable<boolean>
  // {
  //   let direccion = this.url + "Student/UpadateStudent";
  //   return this.http.put<boolean>(direccion,stude);
  // }
  // Deletestude(stude:SProduct):Observable<boolean>{

  //   let direccion = this.url +"Student/DeleteStudent";
  //   return this.http.put<boolean>(direccion,stude);

  // }
  // CreateStudent(stude:SProduct):Observable<boolean>
  // {
  //   console.log(stude);
  //   let direccion = this.url + "Student/CreateStudent";
  //   return this.http.post<boolean>(direccion,stude);
  // }


}
