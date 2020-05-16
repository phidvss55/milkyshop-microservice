<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('categories', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('c_name', 255)->unique();
            $table->string('c_slug', 255)->index();
            $table->integer('c_supplier_id')->index()->default(0);
            $table->char('c_icon')->nullable();
            $table->string('c_avatar', 255)->nullable();
            $table->tinyInteger('c_home')->default(0)->index();
            $table->tinyInteger('c_active')->default(1)->index(); //category nao duoc active
            $table->integer('c_total_product')->default(0); //coi hien tai dnah muc co bao nhieu san pham
            $table->string('c_title_seo', 255)->nullable();
            $table->string('c_description_seo', 255)->nullable();
            $table->string('c_keyword_seo', 255)->nullable();
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
        Schema::dropIfExists('categories');
    }
}
