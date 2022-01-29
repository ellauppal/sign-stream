import { Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import history from './history';
import About1 from './pages/about1/About1';

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
          <Route path='/about1'>
            <About1 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
