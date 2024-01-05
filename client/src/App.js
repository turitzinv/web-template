import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/">
            <h1>Sample Title</h1>
            {/* Featured items randomized? Like picks three? */}
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

//To Do:
//navigation bar: Home (component), Inventory (component), About (component)?
//make Home component first
//Inventory Tab that is all cards. Title, price, click to see details
//log in needed?

export default App;