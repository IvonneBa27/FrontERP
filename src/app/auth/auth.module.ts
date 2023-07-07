import { NgModule, NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { ListRolesComponent } from './security/roles/list-roles/list-roles.component';
import { CreateRolesComponent } from './security/roles/create-roles/create-roles.component';
import { EditRolesComponent } from './security/roles/edit-roles/edit-roles.component';
import { ListPermissComponent } from './security/permiss/list-permiss/list-permiss.component';
import { CreatePermissComponent } from './security/permiss/create-permiss/create-permiss.component';
import { EditPermissComponent } from './security/permiss/edit-permiss/edit-permiss.component';
import { CampaniaListComponent } from '../pages/campanias/campania-list/campania-list.component';
import { SeeUserComponent } from './users/see-user/see-user.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DeleteUserComponent } from './users/delete-user/delete-user.component';
import { CreateModuleComponent } from './security/modules/create-module/create-module.component';
import { EditModuleComponent } from './security/modules/edit-module/edit-module.component';
import { ListModuleComponent } from './security/modules/list-module/list-module.component';
import { DeleteModuleComponent } from './security/modules/delete-module/delete-module.component';
import { SeeModuleComponent } from './security/modules/see-module/see-module.component';
import { CreateTypemoduleComponent } from './catalogos/type_module/create-typemodule/create-typemodule.component';
import { DeleteTypemoduleComponent } from './catalogos/type_module/delete-typemodule/delete-typemodule.component';
import { EditTypemoduleComponent } from './catalogos/type_module/edit-typemodule/edit-typemodule.component';
import { SeeTypemoduleComponent } from './catalogos/type_module/see-typemodule/see-typemodule.component';
import { ListTypemoduleComponent } from './catalogos/type_module/list-typemodule/list-typemodule.component';
import { AddPermisseUserComponent } from './users/add-permisse-user/add-permisse-user.component';
import { CreateClientComponent } from './client/create-client/create-client.component';
import { SeeClientComponent } from './client/see-client/see-client.component';
import { DeleteClientComponent } from './client/delete-client/delete-client.component';
import { EditClientComponent } from './client/edit-client/edit-client.component';
import { ListClientComponent } from './client/list-client/list-client.component';
import { CreateSupplierComponent } from './supplier/create-supplier/create-supplier.component';
import { ListSuppliersComponent } from './supplier/list-suppliers/list-suppliers.component';
import { SeeSupplierComponent } from './supplier/see-supplier/see-supplier.component';
import { DeleteSupplierComponent } from './supplier/delete-supplier/delete-supplier.component';
import { UpdateSupplierComponent } from './supplier/update-supplier/update-supplier.component';
import { EditCategoriesComponent } from './catalogos/categories/edit-categories/edit-categories.component';
import { ListCategoriesComponent } from './catalogos/categories/list-categories/list-categories.component';
import { SeeCategoriesComponent } from './catalogos/categories/see-categories/see-categories.component';
import { DeleteCategoriesComponent } from './catalogos/categories/delete-categories/delete-categories.component';
import { CreateCategoriesComponent } from './catalogos/categories/create-categories/create-categories.component';
import { CreateSubcategoriesComponent } from './catalogos/subcategories/create-subcategories/create-subcategories.component';
import { ListSubcategoriesComponent } from './catalogos/subcategories/list-subcategories/list-subcategories.component';
import { SeeSubcategoriesComponent } from './catalogos/subcategories/see-subcategories/see-subcategories.component';
import { EditSubcategoriesComponent } from './catalogos/subcategories/edit-subcategories/edit-subcategories.component';
import { DeleteSubcategoriesComponent } from './catalogos/subcategories/delete-subcategories/delete-subcategories.component';
import { CreateProductsComponent } from './catalogos/products/create-products/create-products.component';
import { DeleteProductsComponent } from './catalogos/products/delete-products/delete-products.component';
import { EditProductsComponent } from './catalogos/products/edit-products/edit-products.component';
import { ListProductsComponent } from './catalogos/products/list-products/list-products.component';
import { SeeProductsComponent } from './catalogos/products/see-products/see-products.component';
import { CreateStoreComponent } from './setting/store/create-store/create-store.component';
import { EditStoreComponent } from './setting/store/edit-store/edit-store.component';
import { DeleteStoreComponent } from './setting/store/delete-store/delete-store.component';
import { ListStoreComponent } from './setting/store/list-store/list-store.component';
import { SeeStoreComponent } from './setting/store/see-store/see-store.component';
import { CreateSecctionComponent } from './setting/Secctions/create-secction/create-secction.component';
import { DeleteSecctionComponent } from './setting/Secctions/delete-secction/delete-secction.component';
import { EditSecctionComponent } from './setting/Secctions/edit-secction/edit-secction.component';
import { ListSecctionComponent } from './setting/Secctions/list-secction/list-secction.component';
import { SeeSecctionComponent } from './setting/Secctions/see-secction/see-secction.component';
import { LoadingComponent } from '../loading';
import { CreateBrandComponent } from './catalogos/brand/create-brand/create-brand.component';
import { DeleteBrandComponent } from './catalogos/brand/delete-brand/delete-brand.component';
import { EditBrandComponent } from './catalogos/brand/edit-brand/edit-brand.component';
import { ListBrandComponent } from './catalogos/brand/list-brand/list-brand.component';
import { SeeBrandComponent } from './catalogos/brand/see-brand/see-brand.component';
import { HomeInventoryComponent } from './inventory/home-inventory/home-inventory.component';
import { IncomeStoreComponent } from './inventory/income/income-store/income-store.component';
import { IncomeStoreDetailComponent } from './inventory/income/income-store-detail/income-store-detail.component';
import { TransferStoreComponent } from './inventory/transfer/transfer-store/transfer-store.component';
import { ExitStoreComponent } from './inventory/exit/exit-store/exit-store.component';
import { ExitStoreDetailComponent } from './inventory/exit/exit-store-detail/exit-store-detail.component';
import { RetrievePasswordComponent } from './retrieve-password/retrieve-password.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';
import { HomeInventoryDetailComponent } from './inventory/home-inventory-detail/home-inventory-detail/home-inventory-detail.component';
import { InventoryDetailProductsComponent } from './inventory/home-inventory/inventory-products/inventory-detail-products/inventory-detail-products.component';
import { ImagenInventorySecctionComponent } from './inventory/home-inventory/inventory-products/imagen-inventory-secction/imagen-inventory-secction/imagen-inventory-secction.component';





@NgModule({


  declarations: [LoginComponent, RegisterComponent, ChangePasswordComponent, UserListComponent, EditUserComponent, ListRolesComponent, CreateRolesComponent, EditRolesComponent, ListPermissComponent, CreatePermissComponent, EditPermissComponent, SeeUserComponent, DeleteUserComponent, CreateModuleComponent, EditModuleComponent, ListModuleComponent, DeleteModuleComponent, SeeModuleComponent, CreateTypemoduleComponent, DeleteTypemoduleComponent, EditTypemoduleComponent, SeeTypemoduleComponent, ListTypemoduleComponent, AddPermisseUserComponent, CreateClientComponent, SeeClientComponent, DeleteClientComponent, EditClientComponent, ListClientComponent, CreateSupplierComponent, ListSuppliersComponent, SeeSupplierComponent, DeleteSupplierComponent, UpdateSupplierComponent,EditCategoriesComponent, ListCategoriesComponent, SeeCategoriesComponent, DeleteCategoriesComponent,CreateCategoriesComponent, CreateSubcategoriesComponent, ListSubcategoriesComponent, SeeSubcategoriesComponent, EditSubcategoriesComponent, DeleteSubcategoriesComponent, CreateProductsComponent, DeleteProductsComponent, EditProductsComponent, ListProductsComponent, SeeProductsComponent, CreateStoreComponent, EditStoreComponent, DeleteStoreComponent, ListStoreComponent, SeeStoreComponent, CreateSecctionComponent, DeleteSecctionComponent, EditSecctionComponent, ListSecctionComponent, SeeSecctionComponent, LoadingComponent, CreateBrandComponent, DeleteBrandComponent, EditBrandComponent, ListBrandComponent, SeeBrandComponent, HomeInventoryComponent, IncomeStoreComponent, IncomeStoreDetailComponent, TransferStoreComponent, ExitStoreComponent, ExitStoreDetailComponent, RetrievePasswordComponent, ProfileComponent, HomeInventoryDetailComponent, ProfilePictureComponent, InventoryDetailProductsComponent, ImagenInventorySecctionComponent],


  exports: [LoginComponent, RegisterComponent, LoadingComponent],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, NgxPaginationModule],


})
export class AuthModule {}
