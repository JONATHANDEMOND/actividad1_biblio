import { CanActivateFn } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  if( localStorage.getItem('user')== 'true'){
    return true
  }else{
    return true;
  }

};

export const registroGuard: CanActivateFn = (route, state) => {
  if( localStorage.getItem('user')== 'true'){
    return true
  }else{
    return true;
  }
};

export const prestamoGuard: CanActivateFn = (route, state) => {


  if( localStorage.getItem('admin') == 'true' ){
    return false
  }else{
    return true;
  }

  
};

export const catalogoGuard: CanActivateFn = (route, state) => {


  if( localStorage.getItem('admin') == 'true' ){
    return false
  }else{
    return true;
  }

  
};

export const gestionLibrosGuard: CanActivateFn = (route, state) => {


  if( localStorage.getItem('admin') == 'true' ){
    return true
  }else{
    return false;
  }

  
};
export const gestionUsuariosGuard: CanActivateFn = (route, state) => {


  if( localStorage.getItem('admin') == 'true' ){
    return true
  }else{
    return false;
  }

  
};
