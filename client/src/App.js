import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Inventory from "./components/Inventory";

function App() {
  const [items, setItems] = useState(0);
  console.log(items)

  useEffect(() => {
    fetch("/items")
      .then((resp) => resp.json())
      .then((items) => setItems(items));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/inventory">
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
