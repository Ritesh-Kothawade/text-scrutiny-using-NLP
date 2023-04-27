import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { AuthModule } from "../auth/auth.module";
import { HeaderComponent } from '../auth/header/header.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
    declarations: [
        ProfileComponent,
        HomePageComponent
    ],
    exports: [
        ProfileComponent,
    ],
    imports: [
        AuthModule,
        CommonModule
    ]
})
export class HomeModule { }
