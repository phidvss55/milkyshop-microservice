<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('or_transaction_id')->index()->default(0);
            $table->integer('or_product_id')->index()->default(0);
            $table->tinyInteger('or_qty')->default(0);
            $table->integer('or_price')->comment('Price at the bought time')->default(0);
            $table->tinyInteger('or_sale')->comment('Rate sale at the bought time')->default(0);
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
        Schema::dropIfExists('orders');
    }
}
