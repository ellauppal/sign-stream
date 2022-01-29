import { Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import history from './history';

function App() {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
