import { Component } from '@angular/core';
import { AfterViewInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
//auth service gelecek
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../services/auth-service';
import{jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

declare var LoginJs: any;


@Component({
  selector: 'app-login-component',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent implements AfterViewInit {
  userName: string = ''; // <-- burayı ekle
  userEmail: string = ''; // <-- burayı ekle

  loginForm!: FormGroup; 
  constructor(private router: Router,private formBuilder: FormBuilder,private authService:AuthService, private toastrService: ToastrService) {

    this.createLoginForm();
  }

  ngAfterViewInit() {
    if (LoginJs) {
      LoginJs();
    }
  }

  createLoginForm() {

    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],



    })


  }


  login() {

    console.log("login fonksiyonu çalıştı");

     if(this.loginForm.invalid){
      this.toastrService.error("Lütfen tüm alanları doldurunuz","Hata");
      return;
     }

    else  {
      let loginModel = Object.assign({},this.loginForm.value) // bağımsız bir kopya yapıyoruz aslında

   this.authService.login(loginModel).subscribe(response=>{

console.log(this.authService.getUser());

        
    localStorage.setItem("token",response.data.token)

    // gelen tokeni işleyelim

// const decodedToken: any = jwtDecode(response.data.token);
//     console.log(decodedToken);

      // decodedToken içinden kullanıcı bilgilerini alabilirsin
    this.userName = this.authService.getUserName();
    this.userEmail = this.authService.getUserEmail();

   this.toastrService.info(`Hoşgeldiniz ${this.userName}`,"Giriş Başarılı");
  this.router.navigate(['/admin']);

   // gelen tokeni tarayıcıya kaydedelim

 },responseError=>{
  this.toastrService.error(responseError.error)
 })

    }
  }


}
