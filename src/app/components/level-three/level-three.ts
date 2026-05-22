import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SrsService } from '../../core/services/srs';
import { Flashcard } from '../../shared/models/models';

@Component({
  selector: 'app-level-three',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './level-three.html',
  styleUrl: './level-three.css'
})
export class LevelThreeComponent implements OnInit {

  tarjetaActual!: Flashcard;
  mostrarReverso: boolean = false;

  // Variables de analíticas para la sesión actual
  aciertos: number = 0;
  errores: number = 0;

  constructor(private srsService: SrsService) {}

  ngOnInit() {
    this.cargarNuevaTarjeta();
  }

  cargarNuevaTarjeta() {
    this.mostrarReverso = false;
    this.tarjetaActual = this.srsService.getRandomCard();
  }

  voltearTarjeta() {
    this.mostrarReverso = !this.mostrarReverso;
  }

  calificar(acierto: boolean) {
    if (acierto) {
      this.aciertos++;
      console.log(`Tarjeta [${this.tarjetaActual.coreano}] marcada como: ACERTADA. Se programa para mayor espacio de tiempo.`);
    } else {
      this.errores++;
      console.log(`Tarjeta [${this.tarjetaActual.coreano}] marcada como: FALLADA. Regresa a revisión inmediata.`);
    }
    this.cargarNuevaTarjeta();
  }

  calcularEfectividad(): number {
    const total = this.aciertos + this.errores;
    if (total === 0) return 0;
    return Math.round((this.aciertos / total) * 100);
  }
}