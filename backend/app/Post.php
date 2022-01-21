<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    function getPostComments(){
        return $this->hasMany('App\Comment');
    }
}
