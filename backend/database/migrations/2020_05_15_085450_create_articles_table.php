<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateArticlesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('a_name', 255)->nullable()->unique();
            $table->string('a_slug', 255)->index();
            $table->string('a_description', 255)->nullable();
            $table->longText('a_content')->nullable();
            $table->tinyInteger('a_active')->index()->default(1);
            $table->integer('a_author_id')->index()->default(0);
            $table->string('a_description_seo', 255)->nullable();
            $table->string('a_title_seo', 255)->nullable();
            $table->string('a_avatar', 255)->nullable();
            $table->integer('a_view')->default(0);
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
        Schema::dropIfExists('articles');
    }
}
