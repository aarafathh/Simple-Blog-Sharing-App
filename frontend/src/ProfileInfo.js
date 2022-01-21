import Header from './Header';
import './Login.css';

import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { withRouter } from 'react-router-dom';

import ReactHtmlParser from 'react-html-parser';
import { Link } from "react-router-dom";
import './App.css';




function Profile(props) {


    const [data, setData] = useState([]);

    useEffect(() => {

        getData();

    }, [])

    async function getData() {

        let result = await fetch("http://localhost:8000/api/profileInfo/" + props.match.params.id);
        result = await result.json();
        setData(result);



    }


    return (
        <>
            <Header />
            <h2>Hello, {data.name}</h2>

            <div class="card" >
                
                <div className="proImage" ><img alt="Avatar" src="http://localhost:8000/storage/posts/profile.png" />
                </div>
                <div class="container">
                <div className="postTitle">
                        <b className="proName"><pre>{"User Id : "+data.id}</pre></b>
                    </div>
                    <div className="postTitle">
                        <b className="proName"><pre>{"Name : "+data.name}</pre></b>
                    </div>
                    <div className="postTitle">
                    <b className="proName"><pre>{"Email : "+data.email}</pre></b>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
        </>
    );

}

export default withRouter(Profile);
