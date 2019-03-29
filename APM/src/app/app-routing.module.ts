import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';
import { WelcomeComponent } from './home/welcome.component';
import { AuthGuard } from './user/auth.guard';

const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'products',
    canActivate: [AuthGuard],
    loadChildren: './products/product.module#ProductModule'
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes, {
        enableTracing: true,
        preloadingStrategy: PreloadAllModules
      })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
