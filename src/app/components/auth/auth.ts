import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth.html',
  styleUrl: './auth.css'
})
export class AuthComponent {
  isLoginMode: boolean = true;

  // Variables para almacenar los datos del formulario (Data Binding)
  nombre: string = '';
  correo: string = '';
  contrasena: string = '';

  // Inyectamos el servicio de rutas nativo de Angular
  constructor(private router: Router) {}

  // Función que se ejecutará cuando el usuario envíe el formulario
  onSubmit() {
    if (this.isLoginMode) {
      console.log('Iniciando sesión con:', this.correo, this.contrasena);
      // Simulación de Login Exitoso: Redirigimos directo al panel principal
      this.router.navigate(['/dashboard']);
    } else {
      console.log('Creando cuenta para:', this.nombre, this.correo);
      // Una vez registrado, lo pasamos al modo login automáticamente
      this.isLoginMode = true;
    }
  }
}