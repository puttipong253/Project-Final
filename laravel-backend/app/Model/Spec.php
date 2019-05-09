<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Spec extends Model
{
    protected $table ="specs";
    protected $fillable=[
        'user_id', 
        'hook_id','line_id','reel_id','rod_id'
    ];
}
