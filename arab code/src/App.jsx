import "./App.css";
import Form from "./components/Form";
import Products from "./components/products/Products";
import Button from "./components/Button";
import Count from "./components/Count";
function App() {
  const products = [
    { title: "Pizza", desc: "this is a pizza", price: 120, rate: 4 },
    { title: "Mobile", desc: "this is a Mobile", price: 700, rate: 4 },
    { title: "Laptop", desc: "this is a laptop", price: 1200, rate: 4 },
  ];

  return (
    <>
    <Button text="click me"/>
    <Button text="click me again"/>
<Count/>
      <Form />
      <Products products={products} />
    </>
  );
}

export default App;
