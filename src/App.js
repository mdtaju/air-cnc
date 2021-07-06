import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Details from "./Component/Details/Details";
import NavBar from "./Component/HomePage/HomeElements/NavBar/NavBar";
import HomePage from "./Component/HomePage/HomePage";
import SearchNavbar from "./Component/Search/SearchNavbar/SearchNavbar";
import SearchPage from "./Component/Search/SearchPage";
import SignUp from "./Component/SignUpPage/SignUp";
import HomeRules from './Component/HomeRules/HomeRules'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path='/search'>
            <SearchPage />
          </Route>
          <Route path='/sign-up'>
            <NavBar />
            <SignUp />
          </Route>
          <Route path='/details'>
            <SearchNavbar />
            <Details />
          </Route>
          <Route path='/home-rules'>
            <NavBar />
            <HomeRules />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
