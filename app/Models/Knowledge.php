<?php

namespace App\Models;

use App\Models\Knowledge;
use App\Models\Knowledgebasecategory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Knowledge extends Model
{
    protected $fillable = [
        'title_ar', 'title_en', 'description_ar', 'description_en', 'category'
    ];

    public function getCategoryInfo()
    {
       $th = $this->hasOne('App\Models\Knowledgebasecategory', 'id', 'category');
        return $th;
    }

    public static function knowlege_details($id)
    {        
        $knowledge = Knowledgebasecategory::where('id',$id)->first();
        $title = 'title_'.app()->getLocale();
        // dd($knowledge->title);
        if($knowledge)
        {
            return $knowledge->$title;      
        }
    }

    public static function category_count($id)
    {        
        $knowledge = Knowledge::where('category',$id)->count();
        if($knowledge)
        {
            return $knowledge;   
        }
    }

}




