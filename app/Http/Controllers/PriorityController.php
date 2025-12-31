<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Priority;
use App\Models\Policies;
use Illuminate\Support\Facades\Auth;

class PriorityController extends Controller
{
    //
    public function index(Request $request)
    {

            // $priority = Priority::where('created_by',\Auth::user()->id)->get();
            $priority = Priority::all();

            return view('admin.priority.index',compact('priority'));

    }

    public function create()
    {
        $user = \Auth::user();

        return view('admin.priority.create');


    }

    public function store(Request $request)
    {
        $user = \Auth::user();

           $validation = [
            'title_ar' => 'required|string|max:255',
            'title_en' => 'required|string|max:255',
            'content' => 'required|string|max:255',
          ];
          $priority = new Priority();
          $priority->title_ar = $request->title_ar;
          $priority->title_en = $request->title_en;
          $priority->color = $request->color;
          $priority->created_by = Auth::id();
          $priority->save();

        //   $policies = new Policies();
        //   $policies->priority_id = $priority->id;
        //   $policies->response_time = 'Hour';
        //   $policies->resolve_time = 'Hour';
        //   $policies->created_by = \Auth::user()->createId();
        //   $policies->save();

          return redirect()->route('admin.priority.index')->with('success', __('Priority created successfully'));


    }

    public function edit($id)
    {
        $user = \Auth::user();

            $priority = Priority::find($id);

            return view('admin.priority.edit', compact('priority'));


    }

    public function update(Request $request,$id)
    {

        $userObj = \Auth::user();

            $priority = Priority::find($id);
            $priority->title_ar = $request->title_ar;
            $priority->title_en = $request->title_en;
            $priority->color = $request->color;
            $priority->save();
            return redirect()->route('admin.priority.index')->with('success', __('Priority updated successfully'));


    }

    public function destroy($id)
    {

        $user = \Auth::user();

            $priority = Priority::find($id);
            $priority->delete();

            return redirect()->back()->with('success', __('Priority deleted successfully'));

    }

}
