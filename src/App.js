import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import Booking from './Componants/Pages/Home/Booking/Booking';
import Details from './Componants/Pages/Home/Details/Details';
import Home from './Componants/Pages/Home/Home/Home';
import Login from './Componants/Pages/Login/Login/Login';
import Register from './Componants/Pages/Login/Register/Register';
import PrivateRoute from './Componants/Pages/PrivateRoute/PrivateRoute';
import Footer from './Componants/Shared/Footer';
import Header from './Componants/Shared/Header';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div>
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
            <Route path="/details/:id">
              <Details></Details>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/booking">
              <Booking></Booking>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
