<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFishingHooksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fishing_hooks', function (Blueprint $table) {
            $table->increments('id');
            $table->string('hook_name',100);
            $table->double('hook_size');
            $table->string('hook_type',100);
            $table->string('hook_brand',100);
            $table->string('hook_color',100);
            $table->text('hook_image');
            $table->double('hook_price');
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
        Schema::dropIfExists('fishing_hooks');
    }
}
