import { Injectable } from '@angular/core';
import { Flashcard } from '../../shared/models/models';

@Injectable({
  providedIn: 'root'
})
export class SrsService {

  // Mazo de vocabulario ampliado
  private mazo: Flashcard[] = [
    { id: '1', categoria: 'Saludos', nivel: 'básico', coreano: '안녕하세요', espanol: 'Hola', pronunciacion: 'Annyeonghaseyo' },
    { id: '2', categoria: 'Saludos', nivel: 'básico', coreano: '감사합니다', espanol: 'Gracias', pronunciacion: 'Gamsahamnida' },
    { id: '3', categoria: 'Objetos', nivel: 'básico', coreano: '물', espanol: 'Agua', pronunciacion: 'Mul' },
    { id: '4', categoria: 'Objetos', nivel: 'básico', coreano: '사과', espanol: 'Manzana', pronunciacion: 'Sagwa' },
    { id: '5', categoria: 'Saludos', nivel: 'básico', coreano: '네', espanol: 'Sí', pronunciacion: 'Ne' },
    { id: '6', categoria: 'Saludos', nivel: 'básico', coreano: '아니요', espanol: 'No', pronunciacion: 'Aniyo' },
    { id: '7', categoria: 'Personas', nivel: 'básico', coreano: '친구', espanol: 'Amigo', pronunciacion: 'Chingu' },
    { id: '8', categoria: 'Lugares', nivel: 'básico', coreano: '학교', espanol: 'Escuela', pronunciacion: 'Hakgyo' },
    { id: '9', categoria: 'Comida', nivel: 'básico', coreano: '밥', espanol: 'Arroz / Comida', pronunciacion: 'Bap' },
    { id: '10', categoria: 'Objetos', nivel: 'básico', coreano: '책', espanol: 'Libro', pronunciacion: 'Chaek' }
  ];

  constructor() { }

  getFlashcards(): Flashcard[] {
    return this.mazo;
  }

  getRandomCard(): Flashcard {
    const index = Math.floor(Math.random() * this.mazo.length);
    return this.mazo[index];
  }

  getAlternativas(correcta: string): string[] {
    const otras = this.mazo
      .filter(f => f.espanol !== correcta)
      .map(f => f.espanol);
    
    const combinadas = otras.sort(() => 0.5 - Math.random()).slice(0, 3);
    combinadas.push(correcta);
    
    return combinadas.sort(() => 0.5 - Math.random());
  }
}