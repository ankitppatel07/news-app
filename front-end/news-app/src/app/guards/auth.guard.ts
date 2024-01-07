import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginRegService } from 'src/app/services/admin/login-reg.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {

  constructor(private router: Router,
    private loginRegService: LoginRegService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.loginRegService.getUserDetails().userType == "admin") {
        return true;
      }
      else{
        this.router.navigate(['/'])
        return false; //for authguard
        //return true;
      }
  }
  
}
