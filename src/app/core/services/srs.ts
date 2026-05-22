import { Injectable } from '@angular/core';
import { Flashcard } from '../../shared/models/models';

@Injectable({
  providedIn: 'root'
})
export class SrsService {

// Mazo de vocabulario organizado por categorías para fácil escalabilidad
  private mazo: Flashcard[] = [
    // ==========================================
    // CATEGORÍA: SALUDOS
    // ==========================================
    { id: '1', categoria: 'Saludos', nivel: 'básico', coreano: '안녕하세요', espanol: 'Hola', pronunciacion: 'Annyeonghaseyo' },
    { id: '2', categoria: 'Saludos', nivel: 'básico', coreano: '감사합니다', espanol: 'Gracias', pronunciacion: 'Gamsahamnida' },
    { id: '3', categoria: 'Saludos', nivel: 'básico', coreano: '네', espanol: 'Sí', pronunciacion: 'Ne' },
    { id: '4', categoria: 'Saludos', nivel: 'básico', coreano: '아니요', espanol: 'No', pronunciacion: 'Aniyo' },

    // ==========================================
    // CATEGORÍA: PERSONAS
    // ==========================================
    { id: '5', categoria: 'Personas', nivel: 'básico', coreano: '친구', espanol: 'Amigo', pronunciacion: 'Chingu' },
    { id: '6', categoria: 'Personas', nivel: 'básico', coreano: '엄마', espanol: 'Mamá', pronunciacion: 'om-ma' },
    { id: '7', categoria: 'Personas', nivel: 'básico', coreano: '아빠', espanol: 'Papá', pronunciacion: 'a-ppa' },
    { id: '8', categoria: 'Personas', nivel: 'básico', coreano: '선생님', espanol: 'Maestro / profesor', pronunciacion: 'son-seng-nim' },
    { id: '9', categoria: 'Personas', nivel: 'básico', coreano: '학생', espanol: 'Estudiante', pronunciacion: 'hak-seng' },

    // ==========================================
    // CATEGORÍA: LUGARES
    // ==========================================
    { id: '10', categoria: 'Lugares', nivel: 'básico', coreano: '학교', espanol: 'Escuela', pronunciacion: 'Hakgyo' },
    { id: '11', categoria: 'Lugares', nivel: 'básico', coreano: '집', espanol: 'Casa', pronunciacion: 'Jib' },
    { id: '12', categoria: 'Lugares', nivel: 'básico', coreano: '병원', espanol: 'Hospital', pronunciacion: 'piong-uon' },
    { id: '13', categoria: 'Lugares', nivel: 'básico', coreano: '공원', espanol: 'Parque', pronunciacion: 'kong-uon' },

    // ==========================================
    // CATEGORÍA: OBJETOS
    // ==========================================
    { id: '14', categoria: 'Objetos', nivel: 'básico', coreano: '물', espanol: 'Agua', pronunciacion: 'Mul' },
    { id: '15', categoria: 'Objetos', nivel: 'básico', coreano: '책', espanol: 'Libro', pronunciacion: 'Chaek' },
    { id: '16', categoria: 'Objetos', nivel: 'básico', coreano: '의자', espanol: 'Silla', pronunciacion: 'ui-ja' },
    { id: '17', categoria: 'Objetos', nivel: 'básico', coreano: '핸드폰', espanol: 'Teléfono celular', pronunciacion: 'hen-du-pon' },
    { id: '18', categoria: 'Objetos', nivel: 'básico', coreano: '가방', espanol: 'Mochila / bolsa', pronunciacion: 'ka-bang' },
    { id: '19', categoria: 'Objetos', nivel: 'básico', coreano: '컴퓨터', espanol: 'Computadora', pronunciacion: 'kom-piu-to' },

    // ==========================================
    // CATEGORÍA: COMIDA
    // ==========================================
    { id: '20', categoria: 'Comida', nivel: 'básico', coreano: '사과', espanol: 'Manzana', pronunciacion: 'Sagwa' },
    { id: '21', categoria: 'Comida', nivel: 'básico', coreano: '밥', espanol: 'Arroz / Comida', pronunciacion: 'Bap' },
    { id: '22', categoria: 'Comida', nivel: 'básico', coreano: '김치', espanol: 'Kimchi', pronunciacion: 'kim-chi' },
    { id: '23', categoria: 'Comida', nivel: 'básico', coreano: '라면', espanol: 'Ramen', pronunciacion: 'ra-mion' },
    { id: '24', categoria: 'Comida', nivel: 'básico', coreano: '불고기', espanol: 'Bulgogi', pronunciacion: 'pul-go-gi' },

    // ==========================================
    // CATEGORÍA: COLOR
    // ==========================================
    { id: '25', categoria: 'Color', nivel: 'básico', coreano: '빨간색', espanol: 'Rojo', pronunciacion: 'ppal-gan-sek' },
    { id: '26', categoria: 'Color', nivel: 'básico', coreano: '파란색', espanol: 'Azul', pronunciacion: 'pa-ran-sek' },
    { id: '27', categoria: 'Color', nivel: 'básico', coreano: '노란색', espanol: 'Amarillo', pronunciacion: 'no-ran-sek' },
    { id: '28', categoria: 'Color', nivel: 'básico', coreano: '검은색', espanol: 'Negro', pronunciacion: 'ko-mun-sek' },
    { id: '29', categoria: 'Color', nivel: 'básico', coreano: '흰색', espanol: 'Blanco', pronunciacion: 'jin-sek' }
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