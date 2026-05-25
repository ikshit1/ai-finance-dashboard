import { Routes } from '@angular/router';
import { Login } from './features/auth/pages/login/login';
import { Dashboard } from './features/dashboard/pages/dashboard/dashboard';
import { Transactions } from './features/transactions/pages/transactions/transactions';
import { Analytics } from './features/analytics/pages/analytics/analytics';
import { Settings } from './features/settings/pages/settings/settings';
import { ContentWrapper } from './layout/content-wrapper/content-wrapper';

export const routes: Routes = [
   {
    path: '',
    component: ContentWrapper,
    children: [
        {
            path: '',
            redirectTo: 'dashboard',
            pathMatch: 'full',
        },
        {
            path: 'login',
            component: Login,
        },
        {
            path: 'dashboard',
            component: Dashboard,
        },
        {
            path: 'transactions',
            component: Transactions,
        },
        {
            path: 'analytics',
            component: Analytics,
        },
        {
            path: 'settings',
            component: Settings,
        },
    ]
   }
];
