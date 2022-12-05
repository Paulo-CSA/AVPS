import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { InfoComponent } from './views/info/info.component';
import { ProdutosComponent } from './views/produtos/produtos.component';

const routes: Routes = [{path:"", component:HomeComponent},
{path:"home", component:HomeComponent},
{path:"info", component:InfoComponent},
{path:"produtos", component:ProdutosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
