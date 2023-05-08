import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './plantillasf/footer/footer.component';
import { HeaderComponent } from './plantillasf/header/header.component';
import { CartshopComponent } from './Viewsf/cartshop/cartshop.component';
const routes: Routes = [

  {path:'',redirectTo:'cartshop',pathMatch:'full'},
  {path:'cartshop', component:CartshopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CartshopComponent]