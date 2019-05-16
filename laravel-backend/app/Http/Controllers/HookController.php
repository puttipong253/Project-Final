<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\FishingHook;
class HookController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return FishingHook::get();
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
        
        $hook = new FishingHook();
        $hook->fill($request->all());
        $hook->save(); 
    }
    public function search()
    {
        $search = $_GET['search'];
        $hook = \DB::table('fishing_hooks')->where('hook_name','like','%'.$search.'%')
                                        ->Orwhere('hook_type','like','%'.$search.'%')
                                        ->Orwhere('hook_price','<=',$search)
                                        ->get();
                                      
        return $hook;
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return FishingHook::find($id);
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
        $hook = FishingHook::find($id);
        $hook->fill($request->all());
        $hook->save(); 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $hook  =  FishingHook::find($id);
        $hook->destroy($id);
    }
    protected function removeImage($directory)
    {

        unlink(public_path() . $directory);
    }
}
