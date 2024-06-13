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
        Schema::create('logs', function (Blueprint $table) {
            $table->id('logs_id'); // Modifying the name of the primary key
            $table->foreignId('user_id')->nullable()->constrained('users')->onDelete('cascade'); // user_id can be nullable
            $table->unsignedBigInteger('admin_id')->nullable();
            $table->foreign('admin_id')->references('admin_id')->on('admin')->onDelete('cascade'); // Assuming the table name is 'admins'
            $table->string('action');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('logs');
    }
};
