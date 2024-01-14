import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Inventory from "./components/Inventory";
import ItemCard from "./components/ItemCard";

function App() {
  const [items, setItems] = useState([]);
  

  useEffect(() => {
    fetch("/items")
      .then((resp) => resp.json())
      .then((items) => setItems(items));
  }, []);

  const fullItemList = items.length > 0 ? (
    Object.values(items).map((item) => (
      <ItemCard
        key={item.id}
        image={item.image_url}
        name={item.name}
        price={item.price}
        description={item.description}
      />
    ))
  ) : null;

  console.log(items.image_url, "this is image_url")

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/inventory">
            <Inventory fullItemList={fullItemList} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

//To Do:
//About (component)?
//log in needed?
//Ability to add to cart?

export default App;
