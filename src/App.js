import './App.css';
import Home from './Components/HomeComponents/Home';
import Category from './Components/CategorysComponents/Category'
import NotFound from './Components/HomeComponents/NotFound';
import Login from './Components/LoginComponents/Login';
import SignUp from './Components/LoginComponents/SignUp';
import PerfilInfo from './Components/Perfil/PerfilInfo'
import Privacy from './Components/HomeComponents/Privacy';
import Security from './Components/HomeComponents/Security';
import JobDetails from './Components/Details/JobDetails';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import history from './History';

console.log(history.location.pathname)

const device = (/Mobi/.test(navigator.userAgent))

function App() {
  return (
    <Router history={ history }>
      <main className={`App ${device ? 'mobile' : 'desktop'}`}>
        <Switch>s
          <Route exact path='/' component = {Home} />
          <Route exact path='/notFound' component = {NotFound} />
          <Route exact path='/login' component = {Login} />
          <Route exact path='/cadastro' component = {SignUp} />
          <Route exact path='/seguranca' component = {Security} />
          <Route exact path='/privacidade' component = {Privacy} />
          <Route exact path='/detalhes' component = {JobDetails} />
          <Route exact path='/assistencia'>
            <Category categoryType='assistencia' categoryPropsId={1}/>
          </Route>
          <Route exact path='/administrativos'>
            <Category categoryType='administrativos' categoryPropsId={2}/>
          </Route>
          <Route exact path='/artesanais'>
            <Category categoryType='artesanais' categoryPropsId={3}/>
          </Route>
          <Route exact path='/consultoria'>
            <Category categoryType='consultoria' categoryPropsId={4}/>
          </Route>
          <Route exact path='/domesticos'>
            <Category categoryType='domesticos' categoryPropsId={5}/>
          </Route>
          <Route exact path='/educacao'>
            <Category categoryType='educacao' categoryPropsId={6}/>
          </Route>
          <Route exact path='/estetica'>
            <Category categoryType='estetica' categoryPropsId={7}/>
          </Route>
          <Route exact path='/manutencao'>
            <Category categoryType='manutencao' categoryPropsId={8}/>
          </Route>
          <Route exact path='/saude'>
            <Category categoryType='saude' categoryPropsId={9}/>
          </Route>
          <Route exact path='/tecnologia'>
            <Category categoryType='tecnologia' categoryPropsId={10}/>
          </Route>
          <Route exact path='/perfil'>
            <PerfilInfo/>
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
