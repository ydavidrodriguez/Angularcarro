import { Component } from '@angular/core';


import{FormGroup,FormControl,Validators} from '@angular/forms';
import{ApiService} from '../../Servicesf/Api/api.service';
import{SProducI} from '../../Modelsf/MProduct.interface';
import {Router} from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-cartshop',
  templateUrl: './cartshop.component.html',
  styleUrls: ['./cartshop.component.css']
})
export class CartshopComponent {

  sproductos:SProducI[];
  sproductostable :SProducI[];
  producto:string;
  public recs = new MatTableDataSource<SProducI>();

constructor(private api:ApiService,private router:Router)
{
  this.sproductos = [];
  this.sproductostable =[];
  this.producto ="" as string;
}

ngOnInit(): void {
  this.api.GetProducts().subscribe(data => {
    console.log(data);
    this.sproductos = data;
  });
}

agregar(sprod:SProducI)
{
  console.log(sprod);
  localStorage.setItem(sprod.id.toString(),JSON.stringify(sprod));
  this.sproductostable = JSON.parse(localStorage.getItem(sprod.id.toString()) as string);
  this.recs = new  MatTableDataSource(this.sproductostable);

}





}
