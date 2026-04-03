import { Component } from '@angular/core';
import { AfterViewInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
//auth service gelecek
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../services/auth-service';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';
import { MeResponseModel } from '../../../models/meResponseModel';


declare var LoginJs: any;

@Component({
  selector: 'app-register-component',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register-component.html',
  styleUrl: './register-component.css',
})
export class RegisterComponent implements AfterViewInit  {
   registerForm!: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthService, private toastrService: ToastrService) {

    this.createRegisterForm();
  }





  ngAfterViewInit() {
    if (LoginJs) {
      LoginJs();
    }
  }

  createRegisterForm() {

    this.registerForm = this.formBuilder.group({
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required],



    })


  }


  register() {
  if (this.registerForm.invalid) {
    this.toastrService.error('Lütfen tüm alanları doldurunuz', 'Hata');
    return;
  }

  const registerModel = { ...this.registerForm.value };

  this.authService.register(registerModel).subscribe({
    next: (res: any) => {

      // 🔥 Backend 200 dönse bile kontrol et
      if (!res.success) {
        this.toastrService.error(res.message, 'Hata');
        return;
      }

      this.toastrService.success(res.message, 'Başarılı');

      this.router.navigate(['/verify-email'], {
        queryParams: { email: registerModel.email }
      });
    },

    error: (err) => {
      // 🔥 Backend BadRequest dönerse buraya düşer
      const message = err.error?.message || err.error || 'Bir hata oluştu';
      this.toastrService.error(message, 'Hata');
    }
  });
}





}
