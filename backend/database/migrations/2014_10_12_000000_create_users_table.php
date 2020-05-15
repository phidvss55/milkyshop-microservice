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
            $table->string('name');
            $table->string('email')->unique(); //duy nhat
            $table->char('phone')->nullable(); //able to null value
            $table->string('avatar')->nullable();
            $table->string('active')->default(1)->index(); //1 can log, 0 cann't login
            $table->string('address')->nullable();
            $table->string('about')->nullable();
            $table->integer('total_pay')->default(0)->comment('time to buy');
            $table->integer('total_money_paid')->default(0)->comment('Total money paid');
            $table->string('password');
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
