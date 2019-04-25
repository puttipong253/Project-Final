<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class FishingReel extends Model
{
    protected $table ="fishing_reels";
    protected $fillable=[
        'reel_name',
        'reel_size',
        'reel_type',
        'reel_color',
        'reel_brand',
        'reel_price',
        'reel_image'
    ];
}
