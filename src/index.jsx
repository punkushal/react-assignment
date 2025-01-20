// 1) import React and React dom
import { useState } from "react";
import ReactDom from "react-dom/client";

// 2) get a reference to the div with ID root
const element = document.getElementById('root')

// 3) Tell react to control that element
const root = ReactDom.createRoot(element)

// 4) Create a component
const WorkflowContainer = () => {
  const [productList, setProductList] = useState([
    { id: 1, name: "Product A", tick: false },
    { id: 2, name: "Product B", tick: false },
    { id: 3, name: "Product C", tick: false },
    { id: 4, name: "Product D", tick: false },
    { id: 5, name: "Product E", tick: false },
    { id: 6, name: "Product F", tick: true },
    { id: 7, name: "Product G", tick: false },
    { id: 8, name: "Product H", tick: false },
    // Add more products here...
  ]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [customer, setCustomer] = useState("");

  // Handle checkbox toggle
  const handleToggle = (id) => {
    const updatedList = productList.map((product) =>
      product.id === id ? { ...product, tick: !product.tick } : product
    );
    setProductList(updatedList);

    // Update selected products
    const selected = updatedList.filter((product) => product.tick);
    setSelectedProducts(selected);

    // Alert if more than 100 products are selected
    if (selected.length > 100) {
      alert("You have selected more than 100 products. Are you sure?");
    }
  };

  // Handle saving data to "DB"
  const handleSave = () => {
    // Simulate saving to a database
    console.log("Saving selected products:", selectedProducts);
    console.log("Associated customer:", customer);
    alert("Data saved!");
  };

  return (
    <div>
      <h1>Workflow Container</h1>

      <div>
        <label>
          Customer Name:
          <input
            type="text"
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </label>
      </div>

      <div>
        <h2>Product List</h2>
        {productList.map((product) => (
          <div key={product.id}>
            <label>
              <input
                type="checkbox"
                checked={product.tick}
                onChange={() => handleToggle(product.id)}
              />
              {product.name}
            </label>
          </div>
        ))}
      </div>

      <button onClick={handleSave}>Save</button>
    </div>
  );
};
// 5) Show the component
root.render(<WorkflowContainer/>)