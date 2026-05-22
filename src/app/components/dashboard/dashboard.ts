import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent {

  constructor(private router: Router) {}

irANivel(nivel: number) {
    if (nivel === 1) {
      this.router.navigate(['/level-one']);
    } else if (nivel === 2) {
      this.router.navigate(['/level-two']);
    } else if (nivel === 3) {
      this.router.navigate(['/level-three']);
    }
  }

  salir() {
    this.router.navigate(['/auth']);
  }
}