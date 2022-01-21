import Header from "./Header";
import { useState } from "react";
import { Link } from "react-router-dom";
import ReactHtmlParser from 'react-html-parser';

function SearchUser() {

    const [data, setData] = useState([]);


    async function search(key) {

        if (key.length > 1) {

            let result = await fetch("http://localhost:8000/api/searchUser/" + key)
            result = await result.json();
            console.warn(result);
            setData(result);

        }
        else {

        }
    }


    return (
        <div>
            <Header />
            <h1>Looking for Someone?</h1>

            <br />

            <input type="text" onChange={(e) => search(e.target.value)} placeholder="Search Post" />

            {

                data.length > 0 ?
                    
                    
                        data.map((item) =>
                            <div className="container" >
                                <div className="row">
                                    <div className="column-33">
                                        <img style={{ width: 500 }} src={"http://localhost:8000/storage/posts/profile.png"} />
                                    </div>
                                    <div className="column-66">
                                        <h1> <pre >{item.name}</pre></h1>

                                        <div className="pTag">{(item.email)}</div>
                                        <div className="pTag">{"User Id : "+(item.id)}</div>
                                        <br/>
                                        <Link to={"/AuthorsProfile/"+item.id}>Visit Profile</Link>

                                    </div>
                                </div>
                            </div>
                        )
                    
                    :
                    <h3>No Data Found</h3>
            }
        </div>
    )

}

export default SearchUser;