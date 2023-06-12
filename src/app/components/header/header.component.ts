import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isResponsive = false;

  @HostListener('window:resize', [])
  onWindowResize(){
    this.checkResponsive();
  }

  ngOnInit(){
    this.checkResponsive();
  }

  checkResponsive(){
    this.isResponsive = window.innerWidth < 768;
  }
}
