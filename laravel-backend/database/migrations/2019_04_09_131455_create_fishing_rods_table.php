<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFishingRodsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fishing_rods', function (Blueprint $table) {
            $table->increments('id');
            $table->string('rod_name',100);
            $table->double('rod_length');
            $table->string('rod_power',100);
            $table->integer('rod_line');
            $table->string('rod_type',100);
            $table->string('rod_brand',100);
            $table->string('rod_color',100);
            $table->text('rod_image');
            $table->double('rod_price');
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
        Schema::dropIfExists('fishing_rods');
    }
}
