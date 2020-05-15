<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('pro_name')->nullable();
            $table->string('pro_slug')->index();
            $table->integer('pro_category_id')->index()->default(0);
            $table->integer('pro_price')->default(0);
            $table->integer('pro_author_id')->default(0)->index();
            $table->tinyInteger('pro_sale')->default(0);
            $table->tinyInteger('pro_active')->default(1)->index();
            $table->tinyInteger('pro_hot')->default(0);
            $table->integer('pro_view')->default(0); //view count
            $table->string('pro_description')->nullable(); //description about proudct
            $table->longText('pro_content')->nullable(); //content of product
            $table->integer('pro_total_rating')->default(0)->comment('total rating time');
            $table->integer('pro_total_number')->default(0)->comment('Total average rating score');
            $table->tinyInteger('pro_pay')->default(0); //total time this product was bought
            $table->tinyInteger('pro_number')->default(0); //so luong tong trong kho
            $table->string('pro_avatar')->nullable();
            $table->string('pro_title_seo')->nullable();
            $table->string('pro_description_seo')->nullable();
            $table->string('pro_keyword_seo')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
