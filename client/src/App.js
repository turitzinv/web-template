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

      // const fullItemsList = Object.values(items).map((item) => (
      //   <ItemCard
      //     key={item.id}
      //     image={item.image_url}
      //     name={item.name}
      //     price={item.price}
      //     description={item.description}
      //   />
      // ))
  }, []);

  console.log(typeof items)

  const fullItemList = Object.values(items).map((item) => {
    <ItemCard 
    key={item.id}
    image={item.image_url}
    name={item.name}
    price={item.price}
    description={item.description}
    /> 
  })

  // console.log(fullItemList, "this is fullItemList")

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/inventory">
            {/* <Inventory fullItemList={fullItemList} /> */}
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
