import { Route } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';

export const appRoutes: Route[] = [
    {
        path: '', //rota inicial
        pathMatch: 'full', //raiz do projeto
        component: HelloWorldComponent
    },
    {
        path: 'products', //rota pelo navegador
        loadChildren: () => import('modules/products').then(m => m.ProductsModule)
    },
    {
        path: 'orders',
        loadChildren: () => import('modules/orders').then(m => m.OrdersModule)
    }
];
