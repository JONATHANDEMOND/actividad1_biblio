import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-usuarios',
  standalone: true,
  imports: [],
  templateUrl: './gestion-usuarios.component.html',
  styleUrl: './gestion-usuarios.component.css'
})
export class GestionUsuariosComponent {
  ruta = inject(Router)
  
  cerrar(){
    localStorage.removeItem('acceso')
    //localStorage.setItem('acceso', 'false')
    //this.ruta.navigateByUrl('login')
    window.location.href = 'login'
    }

}
