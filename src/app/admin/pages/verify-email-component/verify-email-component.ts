import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../services/auth-service';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email-component.html',
  styleUrls: ['./verify-email-component.css'],
  imports:[CommonModule,ReactiveFormsModule]
})
export class VerifyEmailComponent implements OnInit {

  verifyForm!: FormGroup;
  email!: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.email = params['email']; // Register sayfasından gelen email
    });

    this.verifyForm = this.fb.group({
      code: ['', Validators.required]
    });
  }

  verify() {
    if (this.verifyForm.invalid) {
      this.toastr.error('Kod alanı boş olamaz', 'Hata');
      return;
    }

    const model = { email: this.email, code: this.verifyForm.value.code };
console.log(model);

    this.authService.verifyEmail(model).subscribe({
      next: (res) => {
        this.toastr.success(res.message, 'Başarılı');
        this.router.navigate(['/']); // Ana sayfaya yönlendir
      },
      error: (err) => {
        this.toastr.error(err.error, 'Hata');
        console.log(err);
      }
    });
  }

  resendCode() {

      const emailPayload = { Email: this.email.trim().toLowerCase() }; // string -> DTO

    this.authService.resendCode(emailPayload).subscribe({
      next: (res) => {
        this.toastr.success(res.message, 'Yeni Kod Gönderildi');
      },
      error: (err) => {
        this.toastr.error(err.error, 'Hata');
      }
    });
  }

}