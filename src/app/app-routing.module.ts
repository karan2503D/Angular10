import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAccessGuard } from './admin-access.guard';
import { AdminDeleteComponent } from './admin-delete/admin-delete.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminManageComponent } from './admin-manage/admin-manage.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { SearchComponent } from './search/search.component';
import { SuperAdminGuard } from './super-admin.guard';
import { UnsavedGuard } from './unsaved.guard';

const routes: Routes = [
  // Parameterized Routes
  // {
  //   path: 'product/1', component: P1Component
  // },
  // {
  //   path: 'product/2', component: P2Component
  // }
  // { path: 'product/:id', component: ProductComponent },
  // { path: 'product/:productId/photos/:photoId', component: ProductComponent }
  {
    path: 'search',
    component: SearchComponent,
    canDeactivate: [UnsavedGuard]
  },
  // Router Guard
  // {
  //   path: 'admin',
  //   canActivate: [SuperAdminGuard],
  //   children : [
  //    { path: '', component: AdminComponent },
  //    { canActivateChild: [AdminAccessGuard],children : [
  //      { path: 'manage', component: AdminManageComponent },
  //      { path: 'edit', component: AdminEditComponent },
  //      { path: 'edit', component: AdminDeleteComponent }
  //    ]
  //   }
  //   ]
  // }
  // { path: 'payments', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
