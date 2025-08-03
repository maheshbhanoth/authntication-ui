import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { SuccessComponent } from './components/success/success.component';

export const routes: Routes = [
    { path: '', component: RegisterComponent},
    { path: 'success', component: SuccessComponent}
];
