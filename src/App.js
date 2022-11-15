import React from "react";
import Product from "./components/Product/Product"

class App extends React.Component{
    render() {
        return (
            <div id="main" className="container">
                <h2>React App</h2>
                <Product title="Book 1" price="99"/>
                <Product title="Book 2" price="89">
                    Discount: 20%
                </Product>
                <Product title="Book 3" price="79"/>
            </div>
        );
    }
}

export default App;