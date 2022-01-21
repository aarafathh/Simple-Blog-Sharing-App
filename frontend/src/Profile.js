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

    async function deleteOperation(id) {
        let result = await fetch("http://localhost:8000/api/delete/" + id, {
            method: 'DELETE'
        });

        result = await result.json();
        console.warn(result);
        getData();

    }


    async function getData() {

        let result = await fetch("http://localhost:8000/api/profile/" + props.match.params.id);
        result = await result.json();
        setData(result);



    }


    return (
        <>
            <Header />

            {

                data.length > 0 ?

                    data.map((item) =>
                        <div className="card">

                            <div className="postTitle">
                                <h1  >{item.name}</h1>
                            </div>

                            <img className="imgShow" style={{ width: 700 }} src={"http://localhost:8000/storage/" + item.file_path} />
                            <div className="postTitle">
                                <p>{ReactHtmlParser(item.description)}</p>
                            </div>
                            <p>{item.created_at}</p>
                            <p><button onClick={() => { deleteOperation(item.id) }}>Delete</button></p>
                            <div className="hhh">

                                <p><a className="update" href={"/post/update/" + item.id}><button className="update">Update</button></a></p>
                            </div>
                        </div>
                    )

                    :

                    <h1>No post Available</h1>

            }
        </>
    );

}

export default withRouter(Profile);
