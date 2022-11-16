import React from "react";
import Product from "./components/Product/Product"
import "./App.css"

class App extends React.Component{
    state = {
        products : [
            { title: "Book 1", price: "99" },
            { title: "Book 2", price: "89" },
            { title: "Book 3", price: "79" }
        ],
        showProducts: false,
    }
    
    changePriceHandler = (newTitle) => {
        this.setState({
            products : [
                { title: newTitle, price: "59" },
                { title: "Book 2", price: "59" },
                { title: "Book 3", price: "59" }
            ],
        })
    }

    changeTitleHandler = (event) => {
        this.setState({
            products : [
                { title: "Book 1", price: "59" },
                { title: event.target.value, price: "59" },
                { title: "Book 3", price: "59" }
            ],
        })
    }

    toggleProductHandler = () => {
        const show = this.state.showProducts;
        this.setState({showProducts: !show})
    }

    deleteProductHandler = (productIndex) => {
        const products = this.state.products;
        products.splice(productIndex, 1);
        this.setState({ products: products })
    }

    render() {
        const btn = {
            backgroundColor: '#7b1fa2',
            color: '#fff',
            font: 'inherit',
            border: 'none',
            outline: 'none',
            borderRadius: '3px',
            padding: '0.6rem',
            margin: '0.6rem auto',
            cursor: 'pointer'
        }

        let products = null;
        if (this.state.showProducts) {
            products = (
                <div>
                    {this.state.products.map((item, index) => {
                        return <Product
                            click={() => this.deleteProductHandler(index)}
                            title={item.title}
                            price={item.price}
                        />
                    })}
                </div>
            )
        }

        return (
            <div className="center">
                <h2>Book Store</h2>
                <button style={btn} onClick={this.toggleProductHandler}>Show/Hide Products</button>
                {products}
            </div>
        );
    }
}

export default App;