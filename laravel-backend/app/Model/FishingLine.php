<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class FishingLine extends Model
{
    protected $table ="fishing_lines";
    protected $fillable=[
        'line_name',
        'line_size',
        'line_type',
        'line_color',
        'line_brand',
        'line_price',
        'line_image'
    ];
}
