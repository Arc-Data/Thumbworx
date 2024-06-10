<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::dropIfExists('emergency_contact');
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        Schema::create('emergency_contact', function (Blueprint $table) {
        });
    }
};
