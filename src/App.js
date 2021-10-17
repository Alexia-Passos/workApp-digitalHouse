import './App.css';
import Home from './Components/HomeComponents/Home';
import Category from './Components/CategorysComponents/Category'
import NotFound from './Components/HomeComponents/NotFound';
import Login from './Components/LoginComponents/Login';
import SignUp from './Components/LoginComponents/SignUp';
import EditPerfil from './Components/Perfil/EditPerfil'
import Privacy from './Components/HomeComponents/Privacy';
import Security from './Components/HomeComponents/Security';
import JobDetails from './Components/Details/JobDetails';
import {BrowserRouter as Router, Route, Switch, useHistory} from 'react-router-dom'
import history from './History';

console.log(history.location.pathname)

function App() {
  return (
    <Router history={ history }>
      <main className='App'>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path='/assistencia/:id'>
            <Category categoryType='assistencia'/>
          </Route>
          <Route exact path='/administrativos/:id'>
            <Category categoryType='administrativos'/>
          </Route>
          <Route exact path='/artesanais/:id'>
            <Category categoryType='artesanais'/>
          </Route>
          <Route exact path='/consultoria/:id'>
            <Category categoryType='consultoria'/>
          </Route>
          <Route exact path='/domesticos/:id'>
            <Category categoryType='domesticos'/>
          </Route>
          <Route exact path='/educacao/:id'>
            <Category categoryType='educacao'/>
          </Route>
          <Route exact path='/estetica/:id'>
            <Category categoryType='estetica'/>
          </Route>
          <Route exact path='/manutencao/:id'>
            <Category categoryType='manutencao'/>
          </Route>
          <Route exact path='/saude/:id'>
            <Category categoryType='saude'/>
          </Route>
          <Route exact path='/tecnologia/:id'>
            <Category categoryType='tecnologia'/>
          </Route>
          <Route exact path='/notfound'>
            <NotFound/>
          </Route>
          <Route exact path='/login'>
            <Login/>
          </Route>
          <Route exact path='/cadastro'>
            <SignUp/>
          </Route>
          <Route exact path='/perfil/:id'>
            <EditPerfil/>
          </Route>
          <Route exact path='/seguranca'>
            <Security/>
          </Route>
          <Route exact path='/privacidade'>
            <Privacy/>
          </Route>
          <Route exact path='/detalhes/:id'>
            <JobDetails/>
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
