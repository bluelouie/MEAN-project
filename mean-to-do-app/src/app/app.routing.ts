import { AuthComponent } from './components/auth/auth.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { Routes, RouterModule } from '@angular/router';


const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/tasks', pathMatch: 'full' },
    { path: 'tasks', component: TasksComponent},
    { path: 'auth', component: AuthComponent}
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
