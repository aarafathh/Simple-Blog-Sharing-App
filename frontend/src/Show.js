import Header from './Header';
import './Login.css';

import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { withRouter } from 'react-router-dom';

import ReactHtmlParser from 'react-html-parser';
import { Link } from "react-router-dom";
import './App.css';




function Show(props) {


    console.warn(props);
    

    const [data, setData] = useState([]);
    const [comment, setComment] = useState("");
    const [allcomments,setAllcomments] = useState([]);

    


    let us = localStorage.getItem('user-info');
    let id = (JSON.parse(us)).id;

    useEffect(async () => {
        let result = await fetch("http://localhost:8000/api/post/" + props.match.params.id);
        result = await result.json();
        setData(result);
        
    }, [])

    // async function getData() {

    //     let result = await fetch("http://localhost:8000/api/showComment/" + props.match.params.id);
    //     result = await result.json();
    //     setAllcomments(result);


    //     console.log(allcomments);
    // }


    async function addComment(){

        let user_id = id;
        let post_id = parseInt(props.match.params.id);

        // console.log(comment);
        // console.log(typeof(user_id));
        // console.log(typeof(post_id));
        // console.log(typeof(comment));

        const formData = new FormData();
        //const data = editor.getData();
        //setVal(data);

        formData.append('post_id', post_id);
        formData.append('user_id', user_id);
        formData.append('description', comment);
        

        let result = await fetch("http://localhost:8000/api/addComment", {
            method: 'POST',
            body: formData
        });

        alert("Comment Has been saved");
    }


    return (
        <>
            <Header />
            <h1>Details</h1>

            {/* <div>{data.name}</div>
        <div>
            {
                ReactHtmlParser(data.description)
            }
            </div>
        <div>{data.updated_at}</div> */}


            <div className="card">
                <div className="postTitle">
                    <h1  >{data.name}</h1>
                </div>
                <img className="imgShow" style={{ width: 700 }} src={"http://localhost:8000/storage/" + data.file_path} />
                <div className="postTitle"><p>{ReactHtmlParser(data.description)}</p></div>
                <p>{data.created_at}</p>
                {/* <p><button>Deleeeete</button></p> */}
                {

                    id === data.user_id ?

                        <div className="hhh">

                            <p><a className="update" href={"/post/update/" + data.id}><button className="update">Update</button></a></p>
                        </div>


                        :

                        <div className="notAccess">

                            <p>You can't update/delete this post</p>

                        </div>

                }

                <input type="text"

                    onChange={(e) => setComment(e.target.value)}

                    placeholder="Add a Comment here" />

                <button onClick={addComment} className="commentB">Add Comment</button>
                <br />
                <br />
                <Link to={"/post/comments/"+props.match.params.id}>Show All Comments</Link>


            </div>

            <br />
            <br />


        </>
    );
}

export default withRouter(Show);