<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    function getComments(){
        return $this->hasMany('App\Post');
    }
}
