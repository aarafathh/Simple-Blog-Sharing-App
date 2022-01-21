import { Link, useHistory } from 'react-router-dom';

function Header() {

    const history = useHistory();
    const user = JSON.parse(localStorage.getItem('user-info'));

    function logout() {
        localStorage.clear();
        history.push('/register');
    }

    return (
        <div>
            {/* <h1>Header Page</h1> */}


            {/* {
                localStorage.getItem('user-info') ?
                    <>

                        <Link to="/add">Add product</Link>
                        <Link to="/update">Update product</Link>

                    </>

                    :

                    <>


                        <Link to="/login">Login product</Link>
                        <Link to="/register">Register product</Link>

                    </>
            } */}

            {localStorage.getItem('user-info') ?

                <div class="navbar">

                    <a href="/">Blog App</a>
                    <a href="/">Home</a>


                    <>

                        <Link to="/add">Add Post</Link>
                        {/* <Link to="/update">Update Post</Link> */}
                        <Link to="/search">Search Post</Link>
                        <Link to="/searchUser">Search User</Link>
                        

                    </>
                    <div className="dropdown">
                        <button class="dropbtn">{user && user.name}
                            <i class="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <a onClick={logout} >Logout</a>
                            {/* <a href={"profile/" + user.id}>Profile</a> */}
                            <Link to={"/profile/"+user.id}>Dashboard</Link>
                            <Link to={"/profileInfo/"+user.id}>Profile</Link>

                        </div>
                    </div>
                </div>
                :
                <>

                    <div className="navbar">

                        <Link to="/login">Login </Link>
                        <Link to="/register">Register</Link>
                    </div>


                </>
            }


        </div>
    )
}

export default Header