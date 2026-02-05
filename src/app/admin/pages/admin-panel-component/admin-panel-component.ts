import { Component } from '@angular/core';
// import { UploadPhotoService } from '../../../services/upload-photo-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-panel-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-panel-component.html',
  styleUrl: './admin-panel-component.css',
})
export class AdminPanelComponent {

  isSidebarOpen = false;

  openSidebar() {
    this.isSidebarOpen = true;
  }

  closeSidebar() {
    this.isSidebarOpen = false;
  }
}
