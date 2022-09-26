import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Switch,Route} from "react-router-dom"
import Home from './page/Home';
import HomeMain from './components/HomeMain/HomeMain';
import Galery from './page/Galery/Galery';
import NoFound from './page/NoFound/NoFound';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
         <HomeMain />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Galary"  component={Galery} />
              <Route  path="*"  component={NoFound} />
            </Switch>
        </BrowserRouter>
    </div>
  );
}
export default App;
