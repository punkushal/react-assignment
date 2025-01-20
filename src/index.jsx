import { useState } from "react";
import ReactDom from "react-dom/client";


const element = document.getElementById('root')

const root = ReactDom.createRoot(element)

const styles = {
    container: {
      padding: "20px",
    },
    heading: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "20px",
    },
    section: {
      marginBottom: "20px",
    },
    label: {
      display: "block",
      marginBottom: "10px",
    },
    input: {
      marginLeft: "10px",
      padding: "5px",
      border: "1px solid #ccc",
      borderRadius: "4px",
    },
    checkbox: {
      marginRight: "10px",
    },
    summaryBox: {
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      backgroundColor: "#f8f8f8",
      marginBottom: "20px",
    },
    productList: {
      listStyle: "disc",
      marginLeft: "20px",
      marginTop: "10px",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
    noProducts: {
      color: "#666",
      marginTop: "10px",
      marginLeft: "10px",
    }
  };
  
  const WorkflowContainer = () => {
    const [productList, setProductList] = useState([
      { id: 1, name: "Product A", tick: false },
      { id: 2, name: "Product B", tick: false },
      { id: 3, name: "Product C", tick: false },
      { id: 4, name: "Product D", tick: false },
      { id: 5, name: "Product E", tick: false },
    
    ]);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [customer, setCustomer] = useState("");
  
    const handleToggle = (id) => {
      const updatedList = productList.map((product) =>
        product.id === id ? { ...product, tick: !product.tick } : product
      );
      setProductList(updatedList);
      const selected = updatedList.filter((product) => product.tick);
      setSelectedProducts(selected);
      if (selected.length > 100) {
        alert("You have selected more than 100 products. Are you sure?");
      }
    };
  
    const handleSave = () => {
      console.log("Saving selected products:", selectedProducts);
      console.log("Associated customer:", customer);
      alert("Data saved!");
    };
  
    return (
      <div style={styles.container}>
        <h1 style={styles.heading}>Workflow Container</h1>
        
        <div style={styles.section}>
          <label style={styles.label}>
            Customer Name:
            <input
              type="text"
              value={customer}
              onChange={(e) => setCustomer(e.target.value)}
              style={styles.input}
            />
          </label>
        </div>
  
        <div style={styles.section}>
          <h2 style={styles.heading}>Product List</h2>
          {productList.map((product) => (
            <div key={product.id} style={{ marginBottom: "5px" }}>
              <label>
                <input
                  type="checkbox"
                  checked={product.tick}
                  onChange={() => handleToggle(product.id)}
                  style={styles.checkbox}
                />
                {product.name}
              </label>
            </div>
          ))}
        </div>
  
        <div style={styles.summaryBox}>
          <h2 style={styles.heading}>Selection Summary</h2>
          {customer && (
            <p style={{ marginBottom: "10px" }}>
              <strong>Customer Name:</strong> {customer}
            </p>
          )}
          <div>
            <strong>Selected Products ({selectedProducts.length}):</strong>
            {selectedProducts.length > 0 ? (
              <ul style={styles.productList}>
                {selectedProducts.map((product) => (
                  <li key={product.id}>{product.name}</li>
                ))}
              </ul>
            ) : (
              <p style={styles.noProducts}>No products selected</p>
            )}
          </div>
        </div>
  
        <button 
          onClick={handleSave}
          style={styles.button}
        >
          Save
        </button>
      </div>
    );
  };

root.render(<WorkflowContainer/>)