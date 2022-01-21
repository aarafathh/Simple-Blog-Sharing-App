import Header from "./Header";
import { useState } from "react";
import { Link } from "react-router-dom";
import ReactHtmlParser from 'react-html-parser';

function SearchPost() {

    const [data, setData] = useState([]);


    async function search(key) {

        if (key.length > 1) {

            let result = await fetch("http://localhost:8000/api/search/" + key)
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
            <h1>Looking for any Post?</h1>

            <br />

            <input type="text" onChange={(e) => search(e.target.value)} placeholder="Search Post" />

            {

                data.length > 0 ?
                    //             <table>
                    //                 <tr>
                    //                     <th>ID</th>
                    //                     <th>Name</th>
                    //                     <th>Image</th>
                    //                     <th>Description</th>
                    //                     <th>Operations</th>
                    //                 </tr>

                    //                     {
                    //                         data.map( (item)=>
                    //                             <tr>
                    //                                 <td>{item.id}</td>
                    //                                 <td><Link to={"post/"+item.id}>{item.name}</Link></td>
                    //                                 <td><img style={{width:140}} src={"http://localhost:8000/storage/"+item.file_path} /></td>
                    //                                 <td>{item.description}</td>
                    // {/*                                
                    //                                 <td><span onClick={ () => {deleteOperation(item.id)} } className="delete">Delete</span></td>
                    //                                 <td> <Link to={"update/"+item.id}> <span className="update">Update</span></Link></td>
                    //                              */}
                    //                             </tr>
                    //                         )
                    //                     }

                    //             </table>
                    
                        data.map((item) =>
                            <div className="container" >
                                <div className="row">
                                    <div className="column-33">
                                        <img style={{ width: 500 }} src={"http://localhost:8000/storage/" + item.file_path} />
                                    </div>
                                    <div className="column-66">
                                        <h1> <pre >{item.name}</pre></h1>

                                        <div className="pTag">{ReactHtmlParser(item.description)}</div>
                                        <br/>
                                        <a href={"post/" + item.id}>Read More</a>

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

export default SearchPost;