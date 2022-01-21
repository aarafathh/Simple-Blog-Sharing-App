import Header from "./Header";
import React, { useState, useEffect } from "react";
import { func } from "prop-types";
import { Link } from "react-router-dom";

import ReactHtmlParser from 'react-html-parser';




function Post1(props) {

   
    const { id, name, description, file_path, category, user_id} = props.data;
    return (

        <div className="container" >
            <div className="row">
                <div className="column-33">
                    <img style={{ width: 500 }} src={"http://localhost:8000/storage/" + file_path} />
                </div>
                <div className="column-66">
                    <div><h1> <pre >{name}</pre></h1></div>

                    <div className="pTag">{ReactHtmlParser(description)}</div>
                    <h2> <pre >{category}</pre></h2>
                    <br/>
                    <Link to={"/AuthorsProfile/"+user_id}>{"Author Id : " + user_id}</Link>
                    <br/>
                    <br/>
                    <br/>
                    <a  href={"post/" + id}>Read More</a>
                    
                   

                </div>
            </div>
        </div>

    );
}



export default Post1;