<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CurrentAddress extends Model
{
    use HasFactory;

    protected $table = 'current_address'; //Database Table | Need eto para matawag ung record sa database

    // Define the relationship with User
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
