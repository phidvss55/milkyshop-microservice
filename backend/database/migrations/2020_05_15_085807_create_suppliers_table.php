<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSuppliersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('suppliers', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('s_name')->unique();
            $table->string('s_slug')->index();
            $table->string('s_avatar')->nullable();
            $table->tinyInteger('s_home')->default(0)->index();
            $table->tinyInteger('s_description')->default(0)->index();
            $table->tinyInteger('s_active')->default(1)->index(); //category nao duoc active
            $table->integer('s_total_categories')->default(0); //coi hien tai dnah muc co bao nhieu san pham
            $table->string('c_title_seo')->nullable();
            $table->string('c_description_seo')->nullable();
            $table->string('c_keyword_seo')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('suppliers');
    }
}
