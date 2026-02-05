import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../component/header-component/header-component';

@Component({
  selector: 'app-main-layout-component',
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './main-layout-component.html',
  styleUrl: './main-layout-component.css',
})
export class MainLayoutComponent {

}
