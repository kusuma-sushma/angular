import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  canActivate(route:ActivatedRouteSnapshot) : boolean {
    const expectedRoles = route.data.roles;
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));

    for (let index in expectedRoles) {
      if (userDetails && expectedRoles[index]===userDetails.role) {
        role = expectedRoles[index];
      }
    }
    if (userDetails &&  userDetails.role = role) {
      return true;
    } else {
      return false;
    }
  }
myUrl='http://localhost:8080/users';
  constructor(private http: HttpClient) { }

  register(userDetails) {
    return this.http.post<any>('${this.myUrl}/register',userDetails);
  }
}
