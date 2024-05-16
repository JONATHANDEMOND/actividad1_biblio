import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prestamos',
  standalone: true,
  imports: [],
  templateUrl: './prestamos.component.html',
  styleUrl: './prestamos.component.css'
})
export class PrestamosComponent {
  ruta=inject(Router)
  cerrar(){
    localStorage.removeItem('acceso')
    
    window.location.href= 'login'
  }
}
