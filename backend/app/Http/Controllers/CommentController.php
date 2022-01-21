<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Comment;

class CommentController extends Controller
{
    function addComment(Request $req){

        $comment = new Comment;
        
        $comment -> post_id = $req -> input('post_id');
        $comment -> user_id = $req -> input('user_id');
        $comment -> description = $req -> input('description');
        
        $comment -> save();

        return $comment;

    }

    function showComment($id){
        return Comment::find($id)->getComments;
    }
}
