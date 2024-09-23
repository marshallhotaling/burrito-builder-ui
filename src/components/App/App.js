import {useEffect, useState} from "react";
import "./App.css";
import { getOrders } from "../../apiCalls";
import Orders from "../../components/Orders/Orders";
import OrderForm from "../../components/OrderForm/OrderForm";

function App() {
    const [data, setData] = useState([])

  useEffect(() => {
getOrders().then((orders) => {
    setData(orders.orders)
})
  }, []);

  return (
    <main className="App">
      <header>
        <h1>Burrito Builder</h1>
        <OrderForm />
      </header>

      <Orders orders={data}/>
    </main>
  );
}

export default App;
