<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Spec;
class SpecController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Spec::get();
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
        $spec= new Spec();
        $spec->fill($request->all());
        $spec->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Spec::where('user_id',$id)
  
        ->join('fishing_hooks','specs.hook_id','fishing_hooks.id')
        ->join('fishing_lines','specs.line_id','fishing_lines.id')
        ->join('fishing_reels','specs.reel_id','fishing_reels.id')
        ->join('fishing_rods','specs.rod_id','fishing_rods.id') 
        ->select('fishing_hooks.*','fishing_lines.*','fishing_reels.*','fishing_rods.*','specs.*')
        ->get();
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
         $spec = Spec::find($id);
         $spec->destroy($id);
    }
}
