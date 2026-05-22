export interface Flashcard {
  id: string;
  categoria: string;
  nivel: 'básico' | 'intermedio' | 'avanzado';
  coreano: string;
  espanol: string;
  pronunciacion: string;
}

export interface ProgresoSRS {
  tarjetaId: string;
  cajaActual: number;
  proximaRevision: Date;
  historialAciertos: number;
  historialFallos: number;
}