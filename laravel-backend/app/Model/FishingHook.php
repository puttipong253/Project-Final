<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class FishingHook extends Model
{
    protected $table ="fishing_hooks";
    protected $fillable=[
        'hook_name',
        'hook_size',
        'hook_type',
        'hook_color',
        'hook_brand',
        'hook_price',
        'hook_image'
    ];
}
