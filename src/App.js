import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import AddServices from './Components/Home/Services/AddServices/AddServices';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
import Login from './Shared/Login/Login';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/addservices'>
            <AddServices></AddServices>
          </Route>
        </Switch>
        {/* <Footer></Footer> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
