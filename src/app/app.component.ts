import { Component, ɵisListLikeIterable } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'APVS';
  
  abrirMenu(){
      
    let navBar = document.querySelector(".menu");
    navBar?.classList.toggle("mostrarMenu");
          
  }

  fecharMenu(){
      
    let navBar = document.querySelector(".mostrarMenu");
    navBar?.classList.remove("fecharMenu");
    navBar?.classList.toggle("mostrarMenu");
          
  }
}

