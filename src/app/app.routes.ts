import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PrestamosComponent } from './pages/prestamos/prestamos.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { GestionLibrosComponent } from './pages/gestion-libros/gestion-libros.component';
import { GestionUsuariosComponent } from './pages/gestion-usuarios/gestion-usuarios.component';
import {  catalogoGuard, gestionLibrosGuard, gestionUsuariosGuard, loginGuard, prestamoGuard, registroGuard } from './guards/login.guard';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';

import { ContactosComponent } from './pages/contactos/contactos.component';


export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'contactos',component:ContactosComponent},
    {path:'registro',component:RegistroComponent, canActivate:[registroGuard]},
    {path:'login',component:LoginComponent, canActivate:[loginGuard]},
   {path:'prestamo',component:PrestamosComponent, canActivate:[prestamoGuard]},
    {path:'catalogo',component:CatalogoComponent, canActivate:[catalogoGuard] },
    {path:'gestion',component:GestionLibrosComponent , canActivate:[gestionLibrosGuard]},
    {path:'gestionUser',component:GestionUsuariosComponent, canActivate:[gestionUsuariosGuard]},
   



];
