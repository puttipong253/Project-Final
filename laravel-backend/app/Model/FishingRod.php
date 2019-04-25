<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class FishingRod extends Model
{  
    protected $table ="fishing_rods";
    protected $fillable=[
        'rod_name',
        'rod_power',
        'rod_type',
        'rod_color',
        'rod_brand',
        'rod_price',
        'rod_image',
        'rod_length',
        'rod_line'
    ];
}
