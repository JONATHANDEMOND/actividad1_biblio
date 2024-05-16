import { Component, Inject, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email:any;
  password:String=''
  servicio= inject(LoginService)
  ruta = inject(Router)
////////LOGIN//////

token:any;

  login(formulario:any){
    this.servicio.postLogin(formulario.value).subscribe(u =>{
    
      this.token = u.accessToken
      if(this.token != ''){
        localStorage.setItem("user", 'true')
        console.log(u.user.type)
        
        if(u.user.type == 'admin'){
          localStorage.setItem("admin", 'true')
        }
            window.location.href= 'prestamo'
      }
    })
  }

}
