import GlobalStyle from "Styles/GlobalStyle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ComponentsList from "ComponentsList";
import Accordian from "components/Accordian";
import HamburgerMenu from "components/HamburgerMenu";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/" component={ComponentsList} />
          <Route exact path="/accordian" component={Accordian} />
          <Route exact path="/hamburgerMenu" component={HamburgerMenu} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
