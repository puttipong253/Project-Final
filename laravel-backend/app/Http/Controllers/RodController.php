<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\FishingRod;
class RodController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      
        return FishingRod::get();
       
    }
    public function search()
    {
        $search = $_GET['search'];
        $rod = \DB::table('fishing_rods')->where('rod_name','like','%'.$search.'%')
                                        ->Orwhere('rod_type','like','%'.$search.'%')
                                        ->Orwhere('rod_price','<=',$search)
                                        ->get();
                                      
        return $rod;
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
        $rod = new FishingRod();
        $rod->fill($request->all());
        $rod->save(); 
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return FishingRod::find($id);
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
        $rod = FishingRod::find($id);
        $rod->fill($request->all());
        $rod->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $rod  =  FishingRod::find($id);
        $rod->destroy($id);
    }
}
