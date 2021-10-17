import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import Details from './Componants/Pages/Home/Details/Details';
import Home from './Componants/Pages/Home/Home/Home';
import Footer from './Componants/Shared/Footer';
import Header from './Componants/Shared/Header';

function App() {
  return (
    <div>
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
        </Switch>
        <Footer></Footer>
      </BrowserRouter>

    </div>
  );
}

export default App;
