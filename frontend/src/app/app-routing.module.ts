import { AfterLoginService as HomeAfterLoginService, AfterLoginService } from './services/active/after-login.service';
import { BeforeLoginService as HomeBeforeLoginService } from './services/active/before-login.service';

import { AfterLoginService as AdminAfterLoginService } from './services/active-admin/after-login.service';
import { BeforeLoginService as AdminBeforeLoginService } from './services/active-admin/before-login.service';
// ---------------------- LAYOUTS HOME ------------------------------------------------
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';

// ---------------------- ADMIN ------------------------------------------------
import { LayoutComponent as AdminLayoutComponent } from './admin/layout/layout.component';
import { AdminComponent } from './admin/admin.component';
import { ArticleComponent as AdminArticleComponent } from './admin/article/article.component';
import { CreateComponent as ArticleCreateComponent  } from './admin/article/create/create.component';
import { UpdateComponent as ArticleUpdateComponent } from './admin/article/update/update.component';
import { CategoryComponent as AdminCategoryComponent } from './admin/category/category.component';
import { CreateComponent as CategoryCreateComponent  } from './admin/category/create/create.component';
import { UpdateComponent as CategoryUpdateComponent } from './admin/category/update/update.component';
import { ContactComponent as AdminContactComponent } from './admin/contact/contact.component';
import { LoginComponent as AdminLoginComponent } from './admin/login/login.component';
import { ProductComponent as AdminProductComponent } from './admin/product/product.component';
import { CreateComponent as ProductCreateComponent  } from './admin/product/create/create.component';
import { UpdateComponent as ProductUpdateComponent } from './admin/product/update/update.component';
import { RatingComponent as AdminRatingComponent } from './admin/rating/rating.component';
import { SupplierComponent as AdminSupplierComponent } from './admin/supplier/supplier.component';
import { CreateComponent as SupplierCreateComponent  } from './admin/supplier/create/create.component';
import { UpdateComponent as SupplierUpdateComponent } from './admin/supplier/update/update.component';
import { TransactionComponent as AdminTransactionComponent } from './admin/transaction/transaction.component';
import { UserComponent as AdminUserComponent } from './admin/user/user.component';
import { WarehouseComponent as AdminWarehouseComponent } from './admin/warehouse/warehouse.component';

// ----------------------- HOME -----------------------
import { HomeComponent } from './home/home.component';
import { ArticleComponent as HomeArticleComponent } from './home/article/article.component';
import { ArticleDetailComponent as HomeArticleDetailComponent  } from './home/article/article-detail/article-detail.component';
import { LoginComponent as HomeLoginComponent } from './home/auth/login/login.component';
import { RegisterComponent as HomeRegisterComponent } from './home/auth/register/register.component';
import { ContactComponent as HomeContactComponent } from './home/contact/contact.component';
import { ProductComponent as HomeProductComponent } from './home/product/product.component';
import { ProductDetailComponent as HomeProductDetailComponent } from './home/product/product-detail/product-detail.component';
import { CategoryComponent as HomeCategoryComponent } from './home/category/category.component';
import { SupplierComponent as HomeSupplierComponent } from './home/supplier/supplier.component';
import { PayComponent as HomePayComponent } from './home/shopping/pay/pay.component';
import { CartComponent as HomeCartComponent } from './home/shopping/cart/cart.component';

// ----------------------- USER -----------------------
import { UserComponent } from './user/user.component';
import { InformationComponent } from './user/information/information.component';
import { ChangepasswordComponent } from './user/changepassword/changepassword.component';
import { ProductboughtComponent } from './user/productbought/productbought.component';

// ----------------------- 404 -----------------------
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppModule } from './app.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { 
    path: 'home',
    children: [
      { path: '', component: HomeComponent },
      { path: 'article', component: HomeArticleComponent },
      { path: 'article/detail/:slug/:id', component: HomeArticleDetailComponent }, //this,
      { path: 'login', component: HomeLoginComponent, canActivate: [HomeBeforeLoginService] }, //this
      { path: 'register', component: HomeRegisterComponent, canActivate: [HomeBeforeLoginService] }, //this
      { path: 'contact', component: HomeContactComponent }, //this
      { path: 'product', component: HomeProductComponent },
      { path: 'product/detail/:id/:slug', component: HomeProductDetailComponent },
      { path: 'supplier/:id', component: HomeSupplierComponent },
      { path: 'category/:id', component: HomeCategoryComponent },
      { path: 'shopping/cart', component: HomeCartComponent, canActivate: [AfterLoginService] },
      { path: 'shopping/pay', component: HomePayComponent, canActivate: [AfterLoginService] },
    ]
  },
  {
    path: 'admin',
    children: [
      { path: '', component: AdminComponent, canActivate: [AdminAfterLoginService] },
      { path: 'article', component: AdminArticleComponent, canActivate: [AdminAfterLoginService] },
      { path: 'article/create', component: ArticleCreateComponent , canActivate: [AdminAfterLoginService] },
      { path: 'article/:id/update', component: ArticleUpdateComponent , canActivate: [AdminAfterLoginService] },
      { path: 'category', component: AdminCategoryComponent , canActivate: [AdminAfterLoginService] },
      { path: 'category/create', component: CategoryCreateComponent , canActivate: [AdminAfterLoginService] },
      { path: 'category/:id/update', component: CategoryUpdateComponent , canActivate: [AdminAfterLoginService] },
      { path: 'contact', component: AdminContactComponent , canActivate: [AdminAfterLoginService] },
      { path: 'login', component: AdminLoginComponent , canActivate: [AdminBeforeLoginService] },
      { path: 'product', component: AdminProductComponent , canActivate: [AdminAfterLoginService] },
      { path: 'product/create', component: ProductCreateComponent , canActivate: [AdminAfterLoginService] },
      { path: 'product/:id/update', component: ProductUpdateComponent , canActivate: [AdminAfterLoginService] },
      { path: 'supplier', component: AdminSupplierComponent , canActivate: [AdminAfterLoginService] },
      { path: 'supplier/create', component: SupplierCreateComponent , canActivate: [AdminAfterLoginService] },
      { path: 'supplier/:id/update', component: SupplierUpdateComponent , canActivate: [AdminAfterLoginService] },
      { path: 'transaction', component: AdminTransactionComponent , canActivate: [AdminAfterLoginService] },
      { path: 'rating', component: AdminRatingComponent , canActivate: [AdminAfterLoginService] },
      { path: 'user', component: AdminUserComponent , canActivate: [AdminAfterLoginService] },
      { path: 'warehouse', component: AdminWarehouseComponent , canActivate: [AdminAfterLoginService] },

    ]
  },
  {
    path: 'user',
    children: [
      { path: '', component: UserComponent, canActivate: [HomeAfterLoginService] },
      { path: 'information', component: InformationComponent, canActivate: [HomeAfterLoginService] },
      { path: 'change-password', component: ChangepasswordComponent, canActivate: [HomeAfterLoginService] },
      { path: 'product-bought', component: ProductboughtComponent, canActivate: [HomeAfterLoginService] },
    ]
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
