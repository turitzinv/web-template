import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Inventory from "./components/Inventory";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path ="/inventory">
            <Inventory />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

//To Do:
//navigation bar: Home (component), Inventory (component), About (component)?
//log in needed?

export default App;