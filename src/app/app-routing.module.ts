import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {AuthGuard} from './auth/auth.guard';
import {TrainingModule} from './training/training.module';


const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'training', loadChildren: () => TrainingModule, canLoad: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {
}
