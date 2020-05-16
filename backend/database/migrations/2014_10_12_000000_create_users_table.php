<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name', 255);
            $table->string('email', 255)->unique(); //duy nhat
            $table->char('phone', 255)->nullable(); //able to null value
            $table->string('avatar', 255)->nullable();
            $table->tinyInteger('active')->default(1)->index(); //1 can log, 0 cann't login
            $table->string('address', 255)->nullable();
            $table->string('about', 255)->nullable();
            $table->integer('total_pay')->default(0)->comment('time to buy');
            $table->integer('total_money_paid')->default(0)->comment('Total money paid');
            $table->string('password', 255);
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
}
