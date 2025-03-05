import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layouts/layout/layout.component';
import { AboutpageComponent } from './pages/aboutpage/aboutpage.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomepageComponent,
      },
      {
        path: 'about',
        component: AboutpageComponent,
      },
      {
        path: 'characters',
        component: CharactersComponent,
      },
    ],
  },
];
