import Header from './Header';
import './Login.css';

import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { withRouter } from 'react-router-dom';

import ReactHtmlParser from 'react-html-parser';
import { Link } from "react-router-dom";
import './App.css';




function AllComments(props) {

    const [data, setData] = useState([]);

    useEffect(() => {

        getData();

    }, [])

    async function getData() {

        let result = await fetch("http://localhost:8000/api/post/comments/" + props.match.params.id);
        result = await result.json();
        setData(result);

        //console.log(data);

    }

    return (
        <>
            <Header />
            <h1>Comments</h1>
            {

                data.length > 0 ?

                    data.map((item) =>
                        <div className="commentDesign">
                            <p>Commented by Id : {item.user_id}</p>
                            <h2><pre>{item.description}</pre></h2>
                        </div>
                    )

                    :

                    <h1>No Comment Available</h1>

            }

        </>
    );
}

export default withRouter(AllComments);