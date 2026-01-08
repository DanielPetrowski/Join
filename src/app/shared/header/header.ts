import { Component, HostListener, OnInit, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../firebase-services/auth-services';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive ],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header implements OnInit {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
  this.menuOpen = false;
}

 constructor(private authService: AuthService, private router: Router) {}

  guestLogin() {
  this.router.navigate(['/Login']);
}

async onLogout() {
    try {
      await this.authService.logout();
      this.router.navigate(['/Login']);
    } catch (error) {
      console.error(error);
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;

    // Wenn Menü offen ist
    if (this.menuOpen) {
      const clickedInsideMenu = target.closest('.menu, .menu-mobil');
      
      const clickedOnMenuIcon = target.closest('.menu-icon');

      if (!clickedInsideMenu && !clickedOnMenuIcon) {
        this.menuOpen = false;
      }
    }
  }

   isMobile: boolean = false;

     ngOnInit() {
    this.checkScreenWidth();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreenWidth();
  }

  checkScreenWidth() {
    this.isMobile = window.innerWidth <= 1050;
  }
}
