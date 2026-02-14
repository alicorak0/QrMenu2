import { Component } from '@angular/core';
// import { UploadPhotoService } from '../../../services/upload-photo-service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-panel-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-panel-component.html',
  styleUrl: './admin-panel-component.css',
})
export class AdminPanelComponent {

  isSidebarOpen = false;
  constructor(private authService: AuthService, private router: Router) {}

  openSidebar() {
    this.isSidebarOpen = true;
  }

  closeSidebar() {
    this.isSidebarOpen = false;
  }


    // ✅ Logout fonksiyonu
  logout() {
    this.authService.logout().subscribe({
      next: (res) => {
        console.log(res.message); // backend’den gelen "Logout başarılı"
        // Frontend state temizleme (ör: localStorage)
        // Login sayfasına yönlendir
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Logout sırasında hata:', err);
      },
    });
  }









}
