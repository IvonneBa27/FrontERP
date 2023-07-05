import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

import { AccesoGuard } from '../guards/acceso.guard';
import { GroupListComponent } from './groups/group-list/group-list.component';
import { GroupCreateComponent } from './groups/group-create/group-create.component';
import { CampaniaListComponent } from './campanias/campania-list/campania-list.component';
import { CampaniaCreateComponent } from './campanias/campania-create/campania-create.component';
import { CampaniaAddMonthComponent } from './campanias/campania-add-month/campania-add-month.component';
import { AgentsListComponent } from './agents/agents-list/agents-list.component';
import { LoadFileComponent } from './agents/load-file/load-file.component';
import { CreateUserComponent } from '../auth/users/create-user/create-user.component';
import { EditUserComponent } from '../auth/users/edit-user/edit-user.component';
import { ListRolesComponent } from '../auth/security/roles/list-roles/list-roles.component';
import { UserListComponent } from '../auth/users/user-list/user-list.component';
import { CreateRolesComponent } from '../auth/security/roles/create-roles/create-roles.component';
import { EditRolesComponent } from '../auth/security/roles/edit-roles/edit-roles.component';
import { ListPermissComponent } from '../auth/security/permiss/list-permiss/list-permiss.component';
import { CreatePermissComponent } from '../auth/security/permiss/create-permiss/create-permiss.component';
import { EditPermissComponent } from '../auth/security/permiss/edit-permiss/edit-permiss.component';
import { SeeUserComponent } from '../auth/users/see-user/see-user.component';
import { DeleteUserComponent } from '../auth/users/delete-user/delete-user.component';
import { CreateModuleComponent } from '../auth/security/modules/create-module/create-module.component';
import { EditModuleComponent } from '../auth/security/modules/edit-module/edit-module.component';
import { ListModuleComponent } from '../auth/security/modules/list-module/list-module.component';
import { SeeModuleComponent } from '../auth/security/modules/see-module/see-module.component';
import { DeleteModuleComponent } from '../auth/security/modules/delete-module/delete-module.component';
import { CreateTypemoduleComponent } from '../auth/catalogos/type_module/create-typemodule/create-typemodule.component';
import { EditTypemoduleComponent } from '../auth/catalogos/type_module/edit-typemodule/edit-typemodule.component';
import { ListTypemoduleComponent } from '../auth/catalogos/type_module/list-typemodule/list-typemodule.component';
import { SeeTypemoduleComponent } from '../auth/catalogos/type_module/see-typemodule/see-typemodule.component';
import { DeleteTypemoduleComponent } from '../auth/catalogos/type_module/delete-typemodule/delete-typemodule.component';
import { AddPermisseUserComponent } from '../auth/users/add-permisse-user/add-permisse-user.component';
import { CreateClientComponent } from '../auth/client/create-client/create-client.component';
import { ListClientComponent } from '../auth/client/list-client/list-client.component';
import { SeeClientComponent } from '../auth/client/see-client/see-client.component';
import { EditClientComponent } from '../auth/client/edit-client/edit-client.component';
import { DeleteClientComponent } from '../auth/client/delete-client/delete-client.component';
import { CreateSupplierComponent } from '../auth/supplier/create-supplier/create-supplier.component';
import { ListSuppliersComponent } from '../auth/supplier/list-suppliers/list-suppliers.component';
import { SeeSupplierComponent } from '../auth/supplier/see-supplier/see-supplier.component';
import { UpdateSupplierComponent } from '../auth/supplier/update-supplier/update-supplier.component';
import { DeleteSupplierComponent } from '../auth/supplier/delete-supplier/delete-supplier.component';
import { CreateCategoriesComponent } from '../auth/catalogos/categories/create-categories/create-categories.component';
import { ListCategoriesComponent } from '../auth/catalogos/categories/list-categories/list-categories.component';
import { SeeCategoriesComponent } from '../auth/catalogos/categories/see-categories/see-categories.component';
import { EditCategoriesComponent } from '../auth/catalogos/categories/edit-categories/edit-categories.component';
import { DeleteCategoriesComponent } from '../auth/catalogos/categories/delete-categories/delete-categories.component';
import { CreateSubcategoriesComponent } from '../auth/catalogos/subcategories/create-subcategories/create-subcategories.component';
import { ListSubcategoriesComponent } from '../auth/catalogos/subcategories/list-subcategories/list-subcategories.component';
import { SeeSubcategoriesComponent } from '../auth/catalogos/subcategories/see-subcategories/see-subcategories.component';
import { EditSubcategoriesComponent } from '../auth/catalogos/subcategories/edit-subcategories/edit-subcategories.component';
import { DeleteSubcategoriesComponent } from '../auth/catalogos/subcategories/delete-subcategories/delete-subcategories.component';
import { CreateProductsComponent } from '../auth/catalogos/products/create-products/create-products.component';
import { ListProductsComponent } from '../auth/catalogos/products/list-products/list-products.component';
import { SeeProductsComponent } from '../auth/catalogos/products/see-products/see-products.component';
import { DeleteProductsComponent } from '../auth/catalogos/products/delete-products/delete-products.component';
import { EditProductsComponent } from '../auth/catalogos/products/edit-products/edit-products.component';
import { CreateStoreComponent } from '../auth/setting/store/create-store/create-store.component';
import { ListStoreComponent } from '../auth/setting/store/list-store/list-store.component';
import { SeeStoreComponent } from '../auth/setting/store/see-store/see-store.component';
import { EditStoreComponent } from '../auth/setting/store/edit-store/edit-store.component';
import { DeleteStoreComponent } from '../auth/setting/store/delete-store/delete-store.component';
import { CreateSecctionComponent } from '../auth/setting/Secctions/create-secction/create-secction.component';
import { ListSecctionComponent } from '../auth/setting/Secctions/list-secction/list-secction.component';
import { SeeSecctionComponent } from '../auth/setting/Secctions/see-secction/see-secction.component';
import { EditSecctionComponent } from '../auth/setting/Secctions/edit-secction/edit-secction.component';
import { DeleteSecctionComponent } from '../auth/setting/Secctions/delete-secction/delete-secction.component';
import { SeeImageComponent } from '../auth/setting/Secctions/see-image/see-image.component';
import { SeePhotoComponent } from '../auth/catalogos/products/see-photo/see-photo.component';
import { CreateBrandComponent } from '../auth/catalogos/brand/create-brand/create-brand.component';
import { ListBrandComponent } from '../auth/catalogos/brand/list-brand/list-brand.component';
import { EditBrandComponent } from '../auth/catalogos/brand/edit-brand/edit-brand.component';
import { DeleteBrandComponent } from '../auth/catalogos/brand/delete-brand/delete-brand.component';
import { SeeBrandComponent } from '../auth/catalogos/brand/see-brand/see-brand.component';
import { HomeInventoryComponent } from '../auth/inventory/home-inventory/home-inventory.component';
import { IncomeStoreComponent } from '../auth/inventory/income/income-store/income-store.component';
import { IncomeStoreDetailComponent } from '../auth/inventory/income/income-store-detail/income-store-detail.component';
import { TransferStoreComponent } from '../auth/inventory/transfer/transfer-store/transfer-store.component';
import { BlackListComponent } from './blackList/black-list/black-list.component';
import { BlackListCreateComponent } from './blackList/black-list-create/black-list-create.component';
import { BlackListEditComponent } from './blackList/black-list-edit/black-list-edit.component';
import { ExitStoreComponent } from '../auth/inventory/exit/exit-store/exit-store.component';
import { ExitStoreDetailComponent } from '../auth/inventory/exit/exit-store-detail/exit-store-detail.component';
import { HomeInventoryDetailComponent } from '../auth/inventory/home-inventory-detail/home-inventory-detail/home-inventory-detail.component';



const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
        data: { titulo: 'Dashboard' },
        canActivate: [AccesoGuard],
      },

      {
        path: 'grafica1',
        component: Grafica1Component,
        data: { titulo: 'Graficas' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'acount-settings',
        component: AccountSettingsComponent,
        data: { titulo: 'Temas' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'listado-grupos',
        component: GroupListComponent,
        data: { titulo: 'Listado de grupos' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'crear-grupo',
        component: GroupCreateComponent,
        data: { titulo: 'Crear grupo' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'listado-campanias',
        component: CampaniaListComponent,
        data: { titulo: 'Listado de campañas' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'crear-campania',
        component: CampaniaCreateComponent,
        data: { titulo: 'Crear campaña' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'add-month-campania/:id',
        component: CampaniaAddMonthComponent,
        data: { titulo: 'Agregar mes' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'agents',
        component: AgentsListComponent,
        data: { titulo: 'Agentes' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'load-file',
        component: LoadFileComponent,
        data: { titulo: 'Carga de archivo' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'users-list',
        component: UserListComponent,
        data: { titulo: 'Lista de Usuarios' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'create-user',
        component: CreateUserComponent,
        data: { titulo: 'Crear Usuario' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'edit-user',
        component: EditUserComponent,
        data: { titulo: 'Editar Usuario' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'list-roles',
        component: ListRolesComponent,
        data: { titulo: 'Lista de Roles' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'create-roles',
        component: CreateRolesComponent,
        data: { titulo: 'Crear Roles' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'edit-roles',
        component: EditRolesComponent,
        data: { titulo: 'Editar Roles' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'list-permiss',
        component: ListPermissComponent,
        data: { titulo: 'Lista de Permisos' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'create-permiss',
        component: CreatePermissComponent,
        data: { titulo: 'Crear Permiso' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'edit-permiss',
        component: EditPermissComponent,
        data: { titulo: 'Editar Permiso' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'edit-user/:id',
        component: EditUserComponent,
        data: { titulo: 'Editar Usuario' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'see-user/:id',
        component: SeeUserComponent,
        data: { titulo: 'Usuario' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'delete-user/:id',
        component: DeleteUserComponent,
        data: { titulo: 'Eliminar Usuario' },
        canActivate: [AccesoGuard],
      },

      {
        path: 'create-module',
        component: CreateModuleComponent,
        data: { titulo: 'Crear Módulo' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'edit-module/:id',
        component: EditModuleComponent,
        data: { titulo: 'Editar Módulo' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'list-module',
        component: ListModuleComponent,
        data: { titulo: 'Lista de Módulo' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'see-module/:id',
        component: SeeModuleComponent,
        data: { titulo: 'Módulo' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'delete-module/:id',
        component: DeleteModuleComponent,
        data: { titulo: 'Eliminar Módulo' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'create-typemodule',
        component: CreateTypemoduleComponent,
        data: { titulo: 'Crear Tipo Módulo' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'edit-typemodule/:id',
        component: EditTypemoduleComponent,
        data: { titulo: 'Modificiar Tipo Módulo' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'list-typemodule',
        component: ListTypemoduleComponent,
        data: { titulo: 'Lista de Tipos de Módulos' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'see-typemodule/:id',
        component: SeeTypemoduleComponent,
        data: { titulo: 'Tipo de Módulo' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'delete-typemodule/:id',
        component: DeleteTypemoduleComponent,
        data: { titulo: 'Eliminar Tipo de Módulo' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'add-permisse/:id',
        component: AddPermisseUserComponent,
        data: { titulo: 'Asignar permisos usuario' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'create-client',
        component: CreateClientComponent,
        data: { titulo: 'Crear Cliente' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'list-client',
        component: ListClientComponent,
        data: { titulo: 'Lista de Clientes' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'see-client/:id',
        component: SeeClientComponent,
        data: { titulo: 'Clientes' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'edit-client/:id',
        component: EditClientComponent,
        data: { titulo: 'Editar Cliente' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'delete-client/:id',
        component: DeleteClientComponent,
        data: { titulo: 'Eliminar Cliente' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'create-supplier',
        component: CreateSupplierComponent,
        data: { titulo: 'Crear Proveedor' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'list-suppliers',
        component: ListSuppliersComponent,
        data: { titulo: 'Lista de Proveedores' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'see-supplier/:id',
        component: SeeSupplierComponent,
        data: { titulo: 'Proveedores' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'update-supplier/:id',
        component: UpdateSupplierComponent,
        data: { titulo: 'Editar Proveedor' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'delete-supplier/:id',
        component: DeleteSupplierComponent,
        data: { titulo: 'Eliminar Proveedor' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'create-categories',
        component: CreateCategoriesComponent,
        data: { titulo: 'Crear Categoria' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'list-categories',
        component: ListCategoriesComponent,
        data: { titulo: 'Lista de Categorias' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'see-categories/:id',
        component: SeeCategoriesComponent,
        data: { titulo: 'Categoria' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'edit-categories/:id',
        component: EditCategoriesComponent,
        data: { titulo: 'Editar categoria' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'delete-categories/:id',
        component: DeleteCategoriesComponent,
        data: { titulo: 'Eliminar Categoria' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'create-subcategories/:id',
        component: CreateSubcategoriesComponent,
        data: { titulo: 'Crear SubCategoria' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'list-subcategories/:id',
        component: ListSubcategoriesComponent,
        data: { titulo: 'Lista de SubCategorias' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'see-subcategories/:id',
        component: SeeSubcategoriesComponent,
        data: { titulo: 'SubCategoria' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'edit-subcategories/:id',
        component: EditSubcategoriesComponent,
        data: { titulo: 'Editar Subcategoria' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'delete-subcategories/:id',
        component: DeleteSubcategoriesComponent,
        data: { titulo: 'Eliminar SubCategoria' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'create-products',
        component: CreateProductsComponent,
        data: { titulo: 'Crear Producto' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'list-products',
        component: ListProductsComponent,
        data: { titulo: 'Lista de Producto' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'see-products/:id',
        component: SeeProductsComponent,
        data: { titulo: 'Producto' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'edit-products/:id',
        component: EditProductsComponent,
        data: { titulo: 'Editar Producto' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'delete-products/:id',
        component: DeleteProductsComponent,
        data: { titulo: 'Eliminar Producto' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'create-store',
        component: CreateStoreComponent,
        data: { titulo: 'Crear Almacén' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'list-store',
        component: ListStoreComponent,
        data: { titulo: 'Lista de Almacenes' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'see-store/:id',
        component: SeeStoreComponent,
        data: { titulo: 'Almacén' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'edit-store/:id',
        component: EditStoreComponent,
        data: { titulo: 'Editar Almacén' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'delete-store/:id',
        component: DeleteStoreComponent,
        data: { titulo: 'Eliminar Almacén' },
        canActivate: [AccesoGuard],
      },

      {
        path: 'create-secction/:id',
        component: CreateSecctionComponent,
        data: { titulo: 'Crear Sección' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'list-secction/:id',
        component: ListSecctionComponent,
        data: { titulo: 'Lista de Sección' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'see-secction/:id',
        component: SeeSecctionComponent,
        data: { titulo: 'Seccion' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'edit-secction/:id',
        component: EditSecctionComponent,
        data: { titulo: 'Editar Sección' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'delete-secction/:id',
        component: DeleteSecctionComponent,
        data: { titulo: 'Eliminar Sección' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'see-image/:id',
        component: SeeImageComponent,
        data: { titulo: 'Imagén Sección' },
        canActivate: [AccesoGuard],
      },

      {
        path: 'see-photo/:id',
        component: SeePhotoComponent,
        data: { titulo: 'Imagén Producto' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'create-brand/:id',
        component: CreateBrandComponent,
        data: { titulo: 'Crear Marca' },
        canActivate: [AccesoGuard],
      },

      {
        path: 'list-brand/:id',
        component: ListBrandComponent,
        data: { titulo: 'Lista de Marcas' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'edit-brand/:id',
        component: EditBrandComponent,
        data: { titulo: 'Editar Marca' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'delete-brand/:id',
        component: DeleteBrandComponent,
        data: { titulo: 'Eliminar Marca' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'see-brand/:id',
        component: SeeBrandComponent,
        data: { titulo: 'Marca' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'home-inventory',
        component: HomeInventoryComponent,
        data: { titulo: 'Inventario de Almacenes' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'income-store',
        component: IncomeStoreComponent,
        data: { titulo: 'Ingreso de Almacén' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'income-store-detail/:id',
        component: IncomeStoreDetailComponent,
        data: { titulo: 'Detalle de Ingreso de Almacén' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'transfer-store',
        component: TransferStoreComponent,
        data: { titulo: 'Traspaso de Almacén' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'black-list',
        component: BlackListComponent,
        data: { titulo: 'Lista negra' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'black-list-crate',
        component: BlackListCreateComponent,
        data: { titulo: 'Crear registro de lista negra' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'black-list-edit',
        component: BlackListEditComponent,
        data: { titulo: 'Editar registro de lista negra' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'exit-store',
        component: ExitStoreComponent,
        data: { titulo: 'Salida de Almacén' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'exit-store-detail/:id',
        component: ExitStoreDetailComponent,
        data: { titulo: 'Salida de Detalle de Almacén' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'home-inventory-detail',
        component: HomeInventoryDetailComponent,
        data: { titulo: 'Inventario de Almacenes Detalle' },
        canActivate: [AccesoGuard],
      },
      //   { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
