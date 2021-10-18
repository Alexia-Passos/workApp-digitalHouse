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
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import history from './History';

console.log(history.location.pathname)

function App() {
  return (
    <Router history={ history }>
      <main className='App'>
        <Switch>
          <Route exact path='/' component = {Home} />
          <Route exact path='/' component = {NotFound} />
          <Route exact path='/' component = {Login} />
          <Route exact path='/' component = {SignUp} />
          <Route exact path='/' component = {Security} />
          <Route exact path='/' component = {Privacy} />
          <Route exact path='/' component = {JobDetails} />
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
          <Route exact path='/perfil/:id'>
            <EditPerfil/>
          </Route>
        
        </Switch>
      </main>
    </Router>
  );
}

export default App;
