import Header from './Header';

import { withRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';

import ReactHtmlParser from 'react-html-parser';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function UpdateProduct(props) {

    console.warn("propsss", props.match.params.id);
    const [data, setData] = useState([]);



    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState("");
    const [addData, setVal] = useState("");

    let dataa;

    const hudaiFu = (e, editor) => {

        dataa = editor.getData();
        //data = ReactHtmlParser(data);
        setVal(dataa);

    }

    useEffect(async () => {

        let result = await fetch("http://localhost:8000/api/post/" + props.match.params.id);
        result = await result.json();
        setData(result);
        setName(result.name)
        setDescription(result.description)
        setFile(result.file);
        //CKEditor.instances['ck'].setData("hell");

        //const df = data.description;

    }, [])

    async function editProduct(id) {

        const formData = new FormData();
        //const data = editor.getData();
        //setVal(data);

        //e.preventDefault();

        formData.append('file', file);
        formData.append('name', name);
        formData.append('description', addData);

        let result = await fetch("http://localhost:8000/api/updatepost/" + id + "?_method=PUT", {
            method: 'POST',
            body: formData
        });

        alert("Post Has been updated");
    }

    return (
        <div>
            <Header />
            <h1>Update Page</h1>
            <input type="text"

                onChange={(e) => setName(e.target.value)}

                defaultValue={data.name} /> <br /> <br />

            <div>

            </div>

            {/* <input type="text"

                onChange={(e) => setDescription(e.target.value)}

                defaultValue={description}

            /> <br /> <br /> */}

            <div className="ckeditor">

                <CKEditor editor={ClassicEditor} data={addData}

                    data = {data.description}

                    onChange={hudaiFu}

                />

            </div>

            <br /> <br />


            <input type="file"

                onChange={(e) => setFile(e.target.files[0])}

                defaultValue={data.file_path} /> <br /> <br />
            <div className="upImage">
                <img style={{ width: 300 }} src={"http://localhost:8000/storage/" + data.file_path} />
            </div>
            <br /> <br />

            <button className = "addButton"   onClick={() => editProduct(data.id)} >Update Post</button>

            <br /> <br />
            <br /> <br />
        </div>
    )
}

export default withRouter(UpdateProduct)