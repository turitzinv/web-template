import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

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
//fix react-router-dom on line 2 (check hold project solution)
//navigation bar: Home (component), Inventory (component), About (component)?
//Inventory Tab that is all cards. Title, price, click to see details
//log in needed?

export default App;