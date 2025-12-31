<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\SubCategory;
use Illuminate\Http\Request;

class SubCategoryController extends Controller
{
    public function index(Request $request)
    {
        $subcategories = SubCategory::with('category')->get();

        return view('admin.subcategory.index', compact('subcategories'));
    }


    public function create()
    {
        return view('admin.subcategory.create');
    }

    
    public function store(Request $request)
    {
        $request->validate([
            'category_id' => 'required|exists:categories,id',
            'title_ar' => 'required|string|max:255',
            'title_en' => 'required|string|max:255',
            'color' => 'nullable|string|max:7',
        ]);

        $category = Category::findOrFail($request->category_id);
        $category->subCategories()->create([
            'title_ar' => $request->title_ar,
            'title_en' => $request->title_en,
            'color' => $request->color,
        ]);

        return redirect()->route('admin.subcategory')->with('success', 'Subcategory created successfully!');
    }

    public function destroy($id)
    {
        $subcategory = SubCategory::find($id);
        $subcategory->delete();

        return redirect()->route('admin.subcategory')->with('success', __('Category deleted successfully'));
    }

    public function edit($id)
    {
        $subcategory = SubCategory::findOrFail($id);
        $categories = Category::all();
        return view('admin.subcategory.edit', compact('subcategory', 'categories'));
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'category_id' => 'required|exists:categories,id',
            'title_ar' => 'required|string|max:255',
            'title_en' => 'required|string|max:255',
            'color' => 'nullable|string|max:7',
        ]);

        $subcategory = SubCategory::findOrFail($id);

        $subcategory->category_id = $request->category_id;
        $subcategory->title_ar = $request->title_ar;
        $subcategory->title_en = $request->title_en;
        $subcategory->color = $request->color;

        $subcategory->save();

        return redirect()->route('admin.subcategory')->with('success', __('Subcategory updated successfully!'));
    }

}
