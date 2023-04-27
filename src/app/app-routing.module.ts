import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { ProfileComponent } from './home/profile/profile.component';
import { AuthGuard } from './auth/auth-guard.service';
import { VisualizerComponent } from './auth/visualizer/visualizer.component';
import { AboutUsComponent } from './auth/about-us/about-us.component';
import { ContactUsComponent } from './auth/contact-us/contact-us.component';
import { HomePageComponent } from './home/home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home-page', component: HomePageComponent },
  { path: 'auth/register', component: RegisterComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'visualizer', component: VisualizerComponent, canActivate:[AuthGuard]},
  { path: 'my-profile', component: ProfileComponent, canActivate:[AuthGuard]},
  { path: 'contact-us', component: ContactUsComponent},
  { path: 'about-us', component: AboutUsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
