<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('driver', function (Blueprint $table) {
            $table->id('driver_id');
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->string('license')->nullable();
            $table->string('nbi_clearance')->nullable(); 
            $table->string('lto_driving_history')->nullable(); 
            $table->string('contact_person');
            $table->string('contact_person_relationship');
            $table->string('contact_person_phone_number');
            $table->string('contact_person_email');
            $table->string('contact_person_address');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('driver');
    }
};
