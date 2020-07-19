import React from "react";
import Header from "./components/Header/Header.jsx";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Movies from "./containers/Movies/Movies.jsx";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/:movieType" component={Movies} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;