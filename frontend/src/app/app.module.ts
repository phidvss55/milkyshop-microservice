import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

// ---------------------- LAYOUTS HOME ------------------------------------------------
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';

// ---------------------- ADMIN ------------------------------------------------
import { AdminComponent } from './admin/admin.component';
import { ArticleComponent as AdminArticleComponent } from './admin/article/article.component';
import { CreateComponent as ArticleCreateComponent  } from './admin/article/create/create.component';
import { UpdateComponent as ArticleUpdateComponent } from './admin/article/update/update.component';
import { CategoryComponent as AdminCategoryComponent } from './admin/category/category.component';
import { CreateComponent as CategoryCreateComponent  } from './admin/category/create/create.component';
import { UpdateComponent as CategoryUpdateComponent } from './admin/category/update/update.component';
import { ContactComponent as AdminContactComponent } from './admin/contact/contact.component';
import { LayoutComponent as AdminLayoutComponent } from './admin/layout/layout.component';
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

// ----------------------- USER -----------------------
import { UserComponent } from './user/user.component';
import { InformationComponent } from './user/information/information.component';
import { LayoutUserComponent } from './user/layout-user/layout-user.component';
import { ChangepasswordComponent } from './user/changepassword/changepassword.component';
import { ProductboughtComponent } from './user/productbought/productbought.component';

// ----------------------- 404 -----------------------
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    AdminArticleComponent,
    ArticleCreateComponent,
    ArticleUpdateComponent,
    AdminCategoryComponent,
    CategoryCreateComponent,
    CategoryUpdateComponent,
    AdminContactComponent,
    AdminLayoutComponent,
    AdminLoginComponent,
    AdminProductComponent,
    ProductCreateComponent,
    ProductUpdateComponent,
    AdminRatingComponent,
    AdminSupplierComponent,
    SupplierCreateComponent,
    SupplierUpdateComponent,
    AdminTransactionComponent,
    AdminUserComponent,
    AdminWarehouseComponent,
    HomeComponent,
    HomeArticleComponent,
    HomeArticleDetailComponent,
    HomeLoginComponent,
    HomeRegisterComponent,
    HomeContactComponent,
    HomeProductComponent,
    HomeProductDetailComponent,
    UserComponent,
    LayoutUserComponent,
    InformationComponent,
    ChangepasswordComponent,
    ProductboughtComponent,
    PageNotFoundComponent,
    HomeCategoryComponent,
    HomeSupplierComponent,
    LayoutUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
