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
  
  // Inyectamos el router para poder cambiar de pantalla con TypeScript
  constructor(private router: Router) {}

  irANivel(ruta: string) {
    this.router.navigate([`/${ruta}`]);
  }
}