<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\FishingLine;
class LineController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return FishingLine::get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $line = new FishingLine();
        $line->fill($request->all());
        $line->save(); 
    }
    public function search()
    {
        $search = $_GET['search'];
        $size = $_GET['size'];
        $line = \DB::table('fishing_lines');
        if($size <= 4000 ){
            $line->where('line_size','<=',20);
        }else if($size > 4000 && $size <= 7000){
            $line->where('line_size','>',20)->where('line_size','<=',30);
        }else if($size > 7000){
            $line->where('line_size','>',30);
        }else{
            
        }
        $line = $line->where('line_name','like','%'.$search.'%')
                                        ->Orwhere('line_price','<=',$search)
                                        ->get();
                                      
        return $line;
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return FishingLine::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $line = FishingLine::find($id);
        $line->fill($request->all());
        $line->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $line  =  FishingLine::find($id);
        $line->destroy($id);
    }
}
