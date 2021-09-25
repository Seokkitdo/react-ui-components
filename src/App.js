import GlobalStyle from "Styles/GlobalStyle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Accordian from "components/Accordian";
import ComponentsList from "ComponentsList";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/" component={ComponentsList} />
          <Route exact path="/accordian" component={Accordian} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
