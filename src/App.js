import React from "react";
import Product from "./components/Product/Product"

class App extends React.Component{
    render() {
        return (
            <div id="main" className="container">
                <h2>React App</h2>
                <Product />
                <Product />
                <Product />
            </div>
        );
    }
}

export default App;