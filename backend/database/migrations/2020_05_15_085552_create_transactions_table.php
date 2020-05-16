<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('tr_user_id')->index()->default(0);
            $table->integer('tr_total')->default(0);
            $table->string('tr_note', 255)->nullable();
            $table->string('tr_address', 255)->nullable();
            $table->string('tr_phone', 255)->nullable();
            $table->tinyInteger('tr_status')->default(0)->index();
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
        Schema::dropIfExists('transactions');
    }
}
