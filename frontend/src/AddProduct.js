import Header from './Header';

import { useState } from 'react';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import ReactHtmlParser from 'react-html-parser';



function AddProduct() {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState("");
    const [addData, setVal] = useState("");

    const [userId, setUserId] = useState("");
    const [select, setSelect] = useState();


    let data;

    console.log(select);

    const hudaiFu = (e, editor) => {

        data = editor.getData();
        //data = ReactHtmlParser(data);
        setVal(data);

    }

    async function addProduct(e, editor) {

        console.warn(name, file, description);


        let us = localStorage.getItem('user-info');
        let id = (JSON.parse(us)).id;

        setUserId((id));
        console.log(userId);


        const formData = new FormData();
        //const data = editor.getData();
        //setVal(data);

        formData.append('file', file);
        formData.append('name', name);
        formData.append('description', addData);
        formData.append('user_id', id);
        formData.append('category', select);

        let result = await fetch("http://localhost:8000/api/addPost", {
            method: 'POST',
            body: formData
        });

        alert("Data Has been saved");


    }

    return (
        <div>
            <Header />
            <h1>Add a Post</h1>
            <br />
            <div>
                <br />
                <input type="text"

                    onChange={(e) => setName(e.target.value)}

                    placeholder="Enter a title" />
                <br />
                <br />

                {/* <input type="text"

                    onChange={(e) => setDescription(e.target.value)}

                    placeholder="description" /> */}


                <br />
                <br />





                <div className="ckeditor">

                    <CKEditor editor={ClassicEditor} data={addData}

                        config={{ placeholder: "Write something about your post...." }}

                        onChange={hudaiFu}

                    />

                </div>




                <br />
                <br />

                {/* <div className="custom-select">
                    <select value={select} onChange={e => setSelect(e.target.value)} >
                        <option >Select Category:</option>
                        <option >Technology</option>
                        <option >Science</option>
                        <option >Sports</option>



                    </select>
                </div> */}



                <div className="select-dropdown">
                    <select value={select} onChange={e => setSelect(e.target.value)}>
                        <option >Select Category:</option>
                        <option >Science</option>
                        <option >Technology</option>
                        <option >Sports</option>
                        <option >Others</option>
                    </select>
                </div>



                <br />
                <br />



                <input type="file"

                    onChange={(e) => setFile(e.target.files[0])}

                    placeholder="file" />


                <br />
                <br />


                <button className="addButton" onClick={addProduct}> Add Post </button>

            </div>
        </div>
    )
}

export default AddProduct