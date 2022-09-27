import './App.css';
import {BrowserRouter,Switch,Route} from "react-router-dom"
import Home from './page/Home';
import HomeMain from './components/HomeMain/HomeMain';
import Galery from './page/Galery/Galery';
import NoFound from './page/NoFound/NoFound';
import Social from './components/Social/Social';
import Sinterizadas from './page/Galery/Sinterizadas';
import Granitos from './page/Galery/Granitos';
import Quarztone from './page/Galery/Quarztone';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Social />
         <HomeMain />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Galary"  component={Galery} />
              <Route exact path="/Sinterizadas" component={Sinterizadas} />
              <Route exact path="/Granitos"  component={Granitos} />
              <Route exact  path="/Quarztone" component={Quarztone} />
              <Route  path="*"  component={NoFound} />
            </Switch>
        </BrowserRouter>
    </div>
  );
}
export default App;
