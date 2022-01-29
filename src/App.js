import { Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home';
import About1 from './pages/about1/About1';
import Stream from './pages/stream/Stream';
import history from './history';

function App() {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/about1'>
            <About1 />
          </Route>
          <Route path='/stream'>
            <Stream />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
