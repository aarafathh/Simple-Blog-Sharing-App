import Header from "./Header";
import React, { useState, useEffect } from "react";
import { func } from "prop-types";
import { Link } from "react-router-dom";

import Post1 from "./Post1";
import Pagination1 from "./Pagination1";

import ReactHtmlParser from 'react-html-parser';

function PostList() {

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

        let result = await fetch('http://localhost:8000/api/list');
        result = await result.json();
        setData(result);
        // let us = localStorage.getItem('user-info');
        // let vvv = JSON.parse(us);
        

    }

//     return (
//         <div>
//             <Header />
//             <h1>Product Page</h1>
//         <table>
//             <tr>
//                 <th>ID</th>
//                 <th>Name</th>
//                 <th>Image</th>
//                 <th>Description</th>
//                 <th>Operations</th>
//             </tr>
            
//                 {
//                     data.map( (item)=>
//                         <tr>
//                             <td>{item.id}</td>
//                             <td><Link to={"post/"+item.id}>{item.name}</Link></td>
//                             <td><img style={{width:140}} src={"http://localhost:8000/storage/"+item.file_path} /></td>
//                             <td>{item.description}</td>
//                             <td><span onClick={ () => {deleteOperation(item.id)} } className="delete">Delete</span></td>
//                             <td> <Link to={"update/"+item.id}> <span className="update">Update</span></Link></td>
//                         </tr>
//                     )
//                 }
            
//         </table> 
// {/* 
//             {
//                 data.map((item) =>
//                 <div className="container" >
//                 <div className="row">
//                   <div className="column-33">
//                   <img style={{width:500}} src={"http://localhost:8000/storage/"+item.file_path} />
//                   </div>
//                   <div className="column-66">
//                    <h1> <pre >{item.name}</pre></h1>
                    
//                     <div className="pTag">{ReactHtmlParser(item.description)}</div> 
//                     <a  href={"post/"+item.id}>Read More</a>
                    
//                   </div>
//                 </div>
//               </div>
//                 )
//             } */}

//         </div>
//     )
    return (

        <>

        <Header />
           {/* <h1>Product Page</h1> */}
        <div>
          {data.length > 0 ? (
            <>
              <Pagination1
                data={data}
                RenderComponent={Post1}
                title="All Posts"
                pageLimit={3}
                dataLimit={4}
              />
            </>
          ) : (
           <h1>No Posts to display</h1>
          )}
        </div>

        </>
      );
}

export default PostList;