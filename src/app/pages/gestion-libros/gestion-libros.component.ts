import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-libros',
  standalone: true,
  imports: [],
  templateUrl: './gestion-libros.component.html',
  styleUrl: './gestion-libros.component.css'
})
export class GestionLibrosComponent {
  ruta=inject(Router)
  cerrar(){
    localStorage.removeItem('acceso')
    
    window.location.href= 'login'
  }
}
