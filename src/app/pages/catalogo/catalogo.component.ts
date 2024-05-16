import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {
  ruta=Inject(Router)
  cerrar(){
    localStorage.removeItem('acceso')
    
    window.location.href= 'login'
  }
}
