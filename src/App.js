import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Components/Context/AuthProvider';
import Home from './Components/Home/Home';
import AddServices from './Components/Home/Services/AddServices/AddServices';
import ServicesDatelis from './Components/Home/Services/ServicesDatelis/ServicesDatelis';
import ManageAllOders from './Components/ManageAllOrders/ManageAllOders';
import MyOder from './Components/MyOder/MyOder';
import UpdateOder from './Components/MyOder/UpdateOder/UpdateOder';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
import Login from './Shared/Login/Login';
import SignUp from './Shared/SignUp/SignUp';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/signup'>
            <SignUp></SignUp>
            </Route>
            <Route path='/manage'>
              <ManageAllOders></ManageAllOders>
            </Route>
             <Route path='/update/:id'>
                <UpdateOder></UpdateOder>
              </Route>
          <PrivateRoute path='/addservices'>
            <AddServices></AddServices>
            </PrivateRoute>
            <Route path='/myoder'>
              <MyOder></MyOder>
            </Route>
          <PrivateRoute path='/servicesdatelis/:id'>
            <ServicesDatelis></ServicesDatelis>
          </PrivateRoute>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
