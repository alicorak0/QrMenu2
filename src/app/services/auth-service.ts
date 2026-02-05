import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';
import { LoginModel } from '../models/loginModel';
import { jwtDecode} from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
    apiUrl="https://localhost:44311/api/auth/"

        constructor(private httpClient:HttpClient){}

   login(loginModel:LoginModel) { // nasıl dönecek single mi list mi  //Dönecek veri tipler
   return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"login",loginModel)
  }              // buraya bir de authorization gelmeli




  // Kişi authentice mi ?

  isAuthenticated(){
   
    if(localStorage.getItem("token")){
      return true; // token doluysa değer varsa yani true
    }
    else{
      return false;
    }

  }

  getToken() {
    return localStorage.getItem('token');
  }

  getUser() {
    const token = this.getToken();
    if (!token) return null;

    return jwtDecode<any>(token);
  }

   getUserName() {
  return this.getUser()?.["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];
}

getUserEmail() {
  return this.getUser()?.email;
}

getUserRole() {
  return this.getUser()?.["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
}
}









