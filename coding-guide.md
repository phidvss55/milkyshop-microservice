# In **backend folder**  
**To run laravel, first, let's install it**
## Composer
https://getcomposer.org/Composer-Setup.exe
## Laravel 
composer global require laravel/installer
## Install XAMPP

## Install Vendor
composer install

## Serving Your Application
php artisan serve

## JWT 
(https://jwt-auth.readthedocs.io/en/develop/lumen-installation/)
(https://dev.to/ndiecodes/build-a-jwt-authenticated-api-with-lumen-2afm)
php artisan jwt:secret
php artisan config:clear
php artisan config:cache

# In **frontend folder**  
## install npm
npm install

## Install bootstrap
npm install bootstrap@3.3.7

## config bootstrap to angular.json
"styles": [
    "styles/bootstrap-3.3.7-dist/css/bootstrap.min.css",
    "styles.scss"
]

## Install jquery 
npm install jquery --save

## config jquery.min.js to angular.json
"scripts": [
    "node_modules/bootstrap/dist/js/bootstrap.min.js",
    "node_modules/jquery/dist/jquery.min.js"
]

## Serving Your Application
ng serve