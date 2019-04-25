<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;


    protected function uploadImage($image, $path)
    {
        $name = str_random(10); 

        preg_match("/data:image\/(.*?);/", $image, $image_extension);

        $file_extension = $image_extension[1];
        $image = str_replace('data:image/' . $file_extension . ';base64,', '', $image);

        ($file_extension == 'jpeg') ? $file_extension = 'jpg' : $file_extension = 'png';
        $name = $name . "." . $file_extension;

        $image = str_replace(' ', '+', $image);
        $store_path = '/storage/images/' . $path .'/'. $name;
        \File::put(public_path().$store_path, base64_decode($image));

        return $store_path;

    }
}
