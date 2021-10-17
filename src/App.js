import './App.css';
import Home from './Components/HomeComponents/Home';
import Category from './Components/CategorysComponents/Category'
import NotFound from './Components/HomeComponents/NotFound';
import Login from './Components/LoginComponents/Login';
import SignUp from './Components/LoginComponents/SignUp';
import Perfil from './Components/Perfil/Perfil'
import Privacy from './Components/HomeComponents/Privacy';
import Security from './Components/HomeComponents/Security';
import JobDetails from './Components/Details/JobDetails';
import DataFetching from './helper/DataFetching';
import {Router, Route, Switch} from 'react-router-dom'
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
          <Route exact path='/assistencia'>
            <Category categoryType='assistencia'/>
          </Route>
          <Route exact path='/administrativos'>
            <Category categoryType='administrativos'/>
          </Route>
          <Route exact path='/artesanais'>
            <Category categoryType='artesanais'/>
          </Route>
          <Route exact path='/consultoria'>
            <Category categoryType='consultoria'/>
          </Route>
          <Route exact path='/domesticos'>
            <Category categoryType='domesticos'/>
          </Route>
          <Route exact path='/educacao'>
            <Category categoryType='educacao'/>
          </Route>
          <Route exact path='/estetica'>
            <Category categoryType='estetica'/>
          </Route>
          <Route exact path='/manutencao'>
            <Category categoryType='manutencao'/>
          </Route>
          <Route exact path='/saude'>
            <Category categoryType='saude'/>
          </Route>
          <Route exact path='/tecnologia'>
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
          <Route exact path='/perfil'>
            <Perfil/>
          </Route>
          <Route exact path='/seguranca'>
            <Security/>
          </Route>
          <Route exact path='/privacidade'>
            <Privacy/>
          </Route>
          <Route exact path='/detalhes'>
            <JobDetails/>
          </Route>
          <Route exact path='/deubom'>
            <DataFetching/>
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
