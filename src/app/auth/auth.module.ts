import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthGuard } from './auth-guard.service';
import { HeaderComponent } from './header/header.component';
import { VisualizerComponent } from './visualizer/visualizer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';





@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    VisualizerComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    RegisterComponent,
    LoginComponent,
    HeaderComponent
  ]
})
export class AuthModule { }
