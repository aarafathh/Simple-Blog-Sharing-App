<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Post;

class PostController extends Controller
{
    function addPost(Request $req){

        $post = new Post;
        $post -> name = $req -> input('name');
        $post -> description = $req -> input('description');
        $post -> file_path = $req -> file('file') -> store ('posts','public');
        $post -> user_id = $req -> input('user_id');
        $post -> category = $req -> input('category');
        $post -> save();

        return $post;
        

    }

    

    function list(){
        // return Post::all();
        return Post::latest()->get();
    }

    function delete($id){
        $result = Post::where('id',$id)->delete();
        if($result){
            return [
                "result"=>"product has been deleted"
            ];
        }
        else{

            return [
                "result"=>"operation failed"
            ];

        }
    }

    function getPost($id){
       return Post::find($id);
    }

    function updatePost($id, Request $req){

        $post =  Post::find($id);
        $post -> name = $req -> input('name');
        $post -> description = $req -> input('description');

        if($req -> file('file')){

            $post -> file_path = $req -> file('file') -> store ('posts','public');

        }
        
        $post -> save();

        return $post;
        
   }

   function search($key){
       return Post::where('name','LIKE',"%$key%")->get();
   }


   function showComments($id){
    return Post::find($id)->getPostComments;
   }
}
