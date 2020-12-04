import { Router, Route, Switch } from "react-router-dom";
import { NavLink as RouterNavLink } from "react-router-dom";
import history from "./utils/history";
import TopNav from './components/top-nav'
import Home from "./pages/home/home-view";
import Random from "./pages/random/random-view";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <div id="app" className="d-flex flex-column h-100">
          <TopNav />
          <p>
        
          </p>
          <div>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/random" component={Random} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
