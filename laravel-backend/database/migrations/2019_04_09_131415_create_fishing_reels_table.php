<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFishingReelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fishing_reels', function (Blueprint $table) {
            $table->increments('id');
            $table->string('reel_name',100);
            $table->double('reel_size');
            $table->string('reel_type',100);
            $table->string('reel_brand',100);
            $table->string('reel_color',100);
            $table->text('reel_image');
            $table->double('reel_price');
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
        Schema::dropIfExists('fishing_reels');
    }
}
