import { Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth';
import { DashboardComponent } from './components/dashboard/dashboard';
import { LevelOneComponent } from './components/level-one/level-one';
import { LevelTwoComponent } from './components/level-two/level-two';
import { LevelThreeComponent } from './components/level-three/level-three';

export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'level-one', component: LevelOneComponent },
  { path: 'level-two', component: LevelTwoComponent },
  { path: 'level-three', component: LevelThreeComponent },
  { path: '**', redirectTo: 'auth' }
];