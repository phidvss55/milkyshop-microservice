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
            $table->string('s_name', 255)->unique();
            $table->string('s_slug', 255)->index();
            $table->string('s_avatar', 255)->nullable();
            $table->tinyInteger('s_home')->default(0)->index();
            $table->tinyInteger('s_description')->default(0)->index();
            $table->tinyInteger('s_active')->default(1)->index(); //category nao duoc active
            $table->string('s_title_seo', 255)->nullable();
            $table->string('s_description_seo', 255)->nullable();
            $table->string('s_keyword_seo', 255)->nullable();
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
