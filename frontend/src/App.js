import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import Header from './Header';
import Login from './Login';
import Register from './Register';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import Test from './Test';
import Profile from './Profile';
import Protected from './Protected';
import AuthorsProfile from './AuthorsProfile';

import PostList from './PostList';
import Show from './Show';

import ProfileInfo from './ProfileInfo';

import SearchPost from './SearchPost';
import AllComments from './AllComments';
import SearchUser from './SearchUser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Switch>
     
      {/* <h1>hello blog</h1> */}
      <Route path="/login">
       <Login/>
      </Route>


      <Route path="/profile/:id" exact>
       
       <Protected Cmp={Profile} />
      </Route>
      <Route path="/AuthorsProfile/:id" exact>
       
       <Protected Cmp={AuthorsProfile} />
      </Route>

      <Route path="/profileInfo/:id" exact>
       
       <Protected Cmp={ProfileInfo} />
      </Route>

      {/* <Route path="/profile" >
       
       <Protected Cmp={Login} />
      </Route> */}

      <Route path="/post/update/:id">
      <Protected Cmp={UpdateProduct} />
      </Route>

      <Route path="/post/comments/:id">
      <Protected Cmp={AllComments} />
      </Route>


      <Route path="/add" exact>
       <Protected Cmp={AddProduct} />
      </Route>
      
      <Route path="/register">
       <Register/>
      </Route>

      <Route path="/" exact>
       <Protected Cmp={PostList} />
      </Route>


      <Route path="/post/:id">
       <Protected Cmp={Show} />
      </Route>

      <Route path="/search">
       <Protected Cmp={SearchPost} />
      </Route>

      <Route path="/searchUser">
       <Protected Cmp={SearchUser} />
      </Route>

      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
